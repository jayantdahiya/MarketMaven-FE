"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import axios from "axios";

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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import TickerValidationComponent from "@/utils/TickerValidationComponent";

const formSchema = z.object({
  tickerName: z.string().min(2, {
    message: "Ticker must be valid",
  }),
});

export function MainForm() {
  const [isTickerValid, setIsTickerValid] = useState<boolean>(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tickerName: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!isTickerValid) {
      console.log("Invalid ticker. Cannot submit the form.");
      return;
    }

    // Proceed with submitting the form
    console.log("Form submitted with valid ticker:", values);
  }

  const handleTickerChange = async (value: string) => {
    console.log(value);
    if (value.length > 2) {
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
        );
        const data = response.data;
        console.log(data);
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
          name="tickerName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ticker</FormLabel>
              <FormControl>
                <Input
                  placeholder="AAPL"
                  {...field}
                  onChangeCapture={(e) => handleTickerChange(e.target.value)}
                />
              </FormControl>
              <FormDescription>Enter a valid ticker name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <TickerValidationComponent
          tickerName={form.watch("tickerName")}
          onValidationResult={setIsTickerValid}
        />
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="prophet" defaultChecked>
              Facebook Prophet
            </SelectItem>
            <SelectItem value="arima" disabled>
              ARIMA
            </SelectItem>
            <SelectItem value="extra" disabled>
              Extra
            </SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit">Predict</Button>
      </form>
    </Form>
  );
}
