"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import axios from "axios"
import { db } from "@/db";
import { tickers } from "@/db/schema"
import { useEffect } from "react"

export function ComboBox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [tickerSuggestions, setTickerSuggestions] = React.useState([])

  // const getStockList = async(value: string) => {
  //   let config = {
  //       method: 'get',
  //       maxBodyLength: Infinity,
  //       url: `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=NFX51318A80POPWT`,
  //       headers: { }
  //     };
  //   await axios.request(config)
  //     .then((response) => {
  //       console.log(JSON.stringify(response.data));
  //       setTickerSuggestions(response.data.bestMatches)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }

  const getResult = async() => {
      const result = await db.select().from(tickers)
      console.log("tickers", result)
  }

  useEffect(() => {
      getResult()
  }, [])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-full"
        >
          {value
            ? tickerSuggestions.find((framework) => framework["1. symbol"] === value)?.["2. name"]
            : "Search stock..."}
          <CaretSortIcon className="w-4 h-4 ml-2 opacity-50 shrink-0" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput
            placeholder="Search stock..."
            className="h-9"
            onValueChange={(value) => getStockList(value)}
          />
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup>
            {tickerSuggestions?.length === 0 ? (
              <CommandEmpty>No results found.</CommandEmpty>
            ) : (
              tickerSuggestions?.map((framework) => (
                <CommandItem
                  key={framework["1. symbol"]}
                  value={framework["1. symbol"]}
                  onSelect={(currentValue) => {
                    setValue(currentValue)
                    setOpen(false)
                  }}
                >
                  {framework["2. name"]}
                  {value === framework["1. symbol"] && (
                    <CheckIcon className="w-4 h-4 ml-auto opacity-100" />
                  )}
                </CommandItem>
              ))
            )}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
