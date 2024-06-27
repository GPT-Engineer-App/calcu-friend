import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input)); // Note: eval is used here for simplicity, but it's not recommended for production use due to security risks.
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-center">Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              type="text"
              value={input}
              readOnly
              className="mb-2"
              placeholder="0"
            />
            <Input type="text" value={result} readOnly placeholder="Result" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {["7", "8", "9", "/"].map((value) => (
              <Button key={value} onClick={() => handleClick(value)}>
                {value}
              </Button>
            ))}
            {["4", "5", "6", "*"].map((value) => (
              <Button key={value} onClick={() => handleClick(value)}>
                {value}
              </Button>
            ))}
            {["1", "2", "3", "-"].map((value) => (
              <Button key={value} onClick={() => handleClick(value)}>
                {value}
              </Button>
            ))}
            {["0", ".", "=", "+"].map((value) => (
              <Button
                key={value}
                onClick={() =>
                  value === "=" ? handleCalculate() : handleClick(value)
                }
              >
                {value}
              </Button>
            ))}
            <Button className="col-span-4" onClick={handleClear}>
              Clear
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;