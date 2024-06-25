import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">Fitness Tracker</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div>
                <Label htmlFor="exercise">Exercise</Label>
                <Input id="exercise" name="exercise" type="text" required />
              </div>
              <div>
                <Label htmlFor="duration">Duration (minutes)</Label>
                <Input id="duration" name="duration" type="number" required />
              </div>
              <div>
                <Label htmlFor="date">Date</Label>
                <Input id="date" name="date" type="date" required />
              </div>
              <div className="flex items-center justify-between">
                <Button type="submit" className="w-full">Add Exercise</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;