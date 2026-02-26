"use client"

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "sonner"
import axios from 'axios'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

// 1. Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms",
  }),
})

// Extract the type from the schema
type ContactFormValues = z.infer<typeof contactSchema>

export const ContactForm = () => {
  const apiBaseUrl = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080").replace(/\/$/, "")
  // 2. Initialize form with default values including 'terms'
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { 
      name: "", 
      email: "", 
      message: "",
      terms: false // Important: must match the schema
    },
  })

  // 3. Submission Handler
  async function onSubmit(values: ContactFormValues) {
    try {
      const response = await axios.post(`${apiBaseUrl}/query`, values);
      
      if (response.status === 200 || response.status === 201) {
        toast.success("Request sent successfully!");
        form.reset();
      }
    } catch (err: any) {
      console.error("Submission error:", err);
      toast.error(err.response?.data?.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-xs uppercase">Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-xs uppercase">Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message Field */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-xs uppercase">Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter Your Message" className="min-h-[100px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Terms Field - Restored */}
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox 
                  checked={field.value} 
                  onCheckedChange={field.onChange} 
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-xs text-muted-foreground font-normal">
                  I agree with <a href="#" className="underline hover:text-primary">Terms and Conditions</a>
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          disabled={form.formState.isSubmitting}
          className="w-full bg-[#1e293b] hover:bg-[#0f172a] text-white h-12"
        >
          {form.formState.isSubmitting ? "Sending..." : "Send Your Request"}
        </Button>
      </form>
    </Form>
  )
}
