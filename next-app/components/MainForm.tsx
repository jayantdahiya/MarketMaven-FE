"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Check, ChevronsUpDown } from "lucide-react";

import axios from "axios";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const models = [
  {
    label: "Prophet",
    value: "prophet",
  },
  {
    label: "LSTM",
    value: "lstm",
  },
  {
    label: "ARIMA",
    value: "arima",
  },
] as const;

const formSchema = z.object({
  ticker: z.string({
    required_error: "Please select a ticker.",
  }),
  model: z.string({
    required_error: "Please select a forecasting model.",
  }),
});

interface TickerSuggestion {
  label: string;
  value: string;
}

export function MainForm() {
  let [tickerSuggestions, setTickerSuggestions] = useState<TickerSuggestion[]>([]);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ticker: "",
      model: ""
    }
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Proceed with submitting the form
    console.log("Form submitted with values:", values);
  }

  const handleTickerChange = async (value: string) => {
    console.log(value);
    if (value.length > 2) {
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
        );
        const data = response.data;
        const transformedData: TickerSuggestion[] = data.bestMatches.map((entry: any) => ({
          label: entry["2. name"],
          value: entry["1. symbol"]
        }));
        setTickerSuggestions(transformedData);
      } catch (error) {
        console.error("Error: ", error);
      }
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="ticker"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel>Select a ticker</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                      onChange={() => handleTickerChange(field.value)}
                    >
                      {field.value
                        ? tickerSuggestions.find((ticker) => ticker.value === field.value)
                            ?.label
                        : "Select ticker"}
                      <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Search ticker..." onInputCapture={(e) => handleTickerChange(e.target.value)} />
                    <CommandEmpty>No ticker found.</CommandEmpty>
                    <CommandGroup>
                      {tickerSuggestions?.map((ticker) => (
                        <CommandItem
                        value={ticker.value}
                        key={ticker.value}
                        onSelect={() => {
                          form.setValue("ticker", ticker.value);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            ticker.value === field.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {ticker.label.substring(0,20) + ` ...`}
                      </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                The forecast model will fetch historical data of this ticker.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="model"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select a model</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Model" />
                </SelectTrigger>
                <SelectContent>
                  {models.map((model) => (
                    <SelectItem key={model.value} value={model.value}>
                      {model.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <Button type="submit">Predict</Button>
      </form>
    </Form>
  );
}
