import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ComboBox } from './ComboBox';

export function MainCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Market Maven</CardTitle>
        <CardDescription>Forecast your stocks</CardDescription>
      </CardHeader>

      <CardContent>
        <form>
          <div className="grid items-center w-full gap-4">
            {/* ticker name input */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <ComboBox />
            </div>
            {/* selection for prediction model */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Forecasting Model</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">FB Prophet</SelectItem>
                  <SelectItem value="sveltekit">LSTM</SelectItem>
                  <SelectItem value="astro">ARIMA</SelectItem>
                  <SelectItem value="nuxt">XGBoost</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button variant="outline">Reset</Button>
        <Button>Run</Button>
      </CardFooter>
    </Card>
  );
}
