'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import axios from 'axios';

interface tickers {
  Name: string;
  Symbol: string;
  Sector: string;
}

export function ComboBox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [tickers, setTickers] = React.useState([] as tickers[]);

  async function getTickers() {
    axios
      .get('http://localhost:8000/tickers')
      .then((response) => {
        setTickers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  React.useEffect(() => {
    getTickers();
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? tickers?.find(
                (ticker) =>
                  ticker.Symbol.toLowerCase() ===
                  value.toLowerCase(),
              )?.Name
            : 'Select ticker...'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No tickers found.</CommandEmpty>

          <CommandGroup className="max-h-[300px] overflow-y-scroll overflow-x-hidden">
            {tickers?.map((ticker, index) => (
              <CommandItem
                key={index}
                value={ticker.Symbol}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === ticker.Symbol ? 'opacity-100' : 'opacity-0',
                  )}
                />
                {ticker.Name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
