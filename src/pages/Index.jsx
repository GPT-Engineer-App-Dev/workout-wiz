import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { toast } from "sonner";

const Index = () => {
  const [workouts, setWorkouts] = useState([]);
  const [exercise, setExercise] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");

  const handleAddWorkout = (e) => {
    e.preventDefault();
    const newWorkout = { id: Date.now(), exercise, duration, date };
    setWorkouts([...workouts, newWorkout]);
    setExercise("");
    setDuration("");
    setDate("");
    toast("Workout added successfully!");
  };

  const handleDeleteWorkout = (id) => {
    setWorkouts(workouts.filter((workout) => workout.id !== id));
    toast("Workout deleted successfully!");
  };

  const handleEditWorkout = (id) => {
    const workoutToEdit = workouts.find((workout) => workout.id === id);
    setExercise(workoutToEdit.exercise);
    setDuration(workoutToEdit.duration);
    setDate(workoutToEdit.date);
    handleDeleteWorkout(id);
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">Fitness Tracker</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleAddWorkout}>
              <div>
                <Label htmlFor="exercise">Exercise</Label>
                <Input
                  id="exercise"
                  name="exercise"
                  type="text"
                  value={exercise}
                  onChange={(e) => setExercise(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="duration">Duration (minutes)</Label>
                <Input
                  id="duration"
                  name="duration"
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <Button type="submit" className="w-full">Add Exercise</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      <div className="space-y-4">
          {workouts.map((workout) => (
            <Card key={workout.id}>
              <CardHeader>
                <CardTitle>{workout.exercise}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Duration: {workout.duration} minutes</p>
                <p>Date: {workout.date}</p>
                <div className="flex space-x-2 mt-4">
                  <Button variant="outline" onClick={() => handleEditWorkout(workout.id)}>Edit</Button>
                  <Button variant="destructive" onClick={() => handleDeleteWorkout(workout.id)}>Delete</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;