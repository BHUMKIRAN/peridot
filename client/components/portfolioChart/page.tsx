"use client"

import { ArrowUpDown, TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Cell, LabelList, XAxis, YAxis } from "recharts"
import { useEffect, useState } from "react"
import axios from "axios"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartConfig = {
  amount: {
    label: "Profit/Loss ($)",
  },
} satisfies ChartConfig

type ChartPoint = {
  label: string
  amount: number
  fill: string
}

export const ChartBarNegative = () => {
  const apiBaseUrl = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080").replace(/\/$/, "")
  const [data, setData] = useState<ChartPoint[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}/getChartdata`)
        setData(response.data)
      } catch (err) {
        console.error("Failed to fetch chart data:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchChartData()
  }, [])

  if (loading) return <div className="h-[300px] flex items-center justify-center">Loading Chart...</div>

  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardHeader className="px-0">
        <CardTitle className="flex items-center gap-2 text-xl">
          Cash Flow <ArrowUpDown size={18} className="text-gray-400" />
        </CardTitle>
        <CardDescription>Real-time P&L across all PMS models</CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
          <BarChart 
            accessibilityLayer 
            data={data}
            margin={{ top: 25, right: 10, left: 10, bottom: 20 }} // Added top margin for labels
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.5} />
            
            {/* Added XAxis to identify Diamond vs Platinum */}
            <XAxis 
              dataKey="label" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              dy={10}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Bar dataKey="amount" radius={6}>
              {/* MONEY LABELS ON TOP OF BARS */}
              <LabelList 
                dataKey="amount" 
                position="top" 
                offset={10}
                className="fill-foreground font-bold" 
                fontSize={12}
                formatter={(value: number) =>
                  `${value >= 0 ? "+" : ""}$${value.toLocaleString()}`
                }
              />
              
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.fill} 
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm px-0 border-t pt-4">
        <div className="flex gap-2 leading-none font-semibold text-emerald-600">
          Portfolio Analysis <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground">
          Bars represent net gain/loss after sharing logic.
        </div>
      </CardFooter>
    </Card>
  )
}
