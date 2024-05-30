'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { MainForm } from './MainForm';

export function Landing() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Maven</CardTitle>
        <CardDescription>
          Start by entering a ticker symbol below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <MainForm />
      </CardContent>
      <CardFooter>
        <p className="text-xs font-thin">
          the app is currently under development*
        </p>
      </CardFooter>
    </Card>
  );
}
