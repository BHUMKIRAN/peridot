"use client"

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast, Toaster } from "sonner"
import axios from 'axios'
import { Mail, User, MessageSquare, ArrowRight, Loader2 } from 'lucide-react'

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
import { useMutation } from '@tanstack/react-query'

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms",
  }),
})

type ContactFormValues = z.infer<typeof contactSchema>

export const ContactForm = () => {
  const apiBaseUrl = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080")

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      terms: false
    },
  })

  // 1. Define the mutation at the top level
  const contactMutation = useMutation({
    mutationFn: async (values: ContactFormValues) => {
      const response = await axios.post(`${apiBaseUrl}/query`, values);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Request sent successfully! We'll be in touch.");
      form.reset();
    },
    onError: (err: any) => {
      toast.error(
        err.response?.data?.message || "Connection error. Please try again."
      );
    }
  })

  // 2. Simply call the mutation in onSubmit
  function onSubmit(values: ContactFormValues) {
    contactMutation.mutate(values);
  }

  return (
    <div className="w-full">
      <Toaster position="top-center" richColors />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-1.5 group">
                <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Full Name</FormLabel>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors" size={18} />
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      className="bg-slate-50 border-slate-100 h-14 pl-12 rounded-2xl focus-visible:ring-4 focus-visible:ring-emerald-50 focus-visible:border-emerald-500 transition-all placeholder:text-slate-300"
                    />
                  </FormControl>
                </div>
                <FormMessage className="text-[10px] font-bold text-red-500 ml-1" />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1.5 group">
                <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Email Address</FormLabel>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors" size={18} />
                  <FormControl>
                    <Input
                      placeholder="john@example.com"
                      {...field}
                      className="bg-slate-50 border-slate-100 h-14 pl-12 rounded-2xl focus-visible:ring-4 focus-visible:ring-emerald-50 focus-visible:border-emerald-500 transition-all placeholder:text-slate-300"
                    />
                  </FormControl>
                </div>
                <FormMessage className="text-[10px] font-bold text-red-500 ml-1" />
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="space-y-1.5 group">
                <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Your Inquiry</FormLabel>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-5 text-slate-300 group-focus-within:text-emerald-500 transition-colors" size={18} />
                  <FormControl>
                    <Textarea
                      placeholder="How can we assist with your portfolio?"
                      className="min-h-[120px] bg-slate-50 border-slate-100 pl-12 pt-4 rounded-2xl focus-visible:ring-4 focus-visible:ring-emerald-50 focus-visible:border-emerald-500 transition-all placeholder:text-slate-300 resize-none"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage className="text-[10px] font-bold text-red-500 ml-1" />
              </FormItem>
            )}
          />

          {/* Terms Field */}
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition-colors hover:bg-slate-50">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="rounded-md border-slate-300 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                  />
                </FormControl>
                <div className="leading-none">
                  <FormLabel className="text-[11px] text-slate-500 font-medium">
                    I agree with the <a href="#" className="text-slate-900 font-bold hover:underline underline-offset-2 transition-all">Terms and Conditions</a>
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            // 3. Use contactMutation.isPending instead of formState.isSubmitting
            disabled={contactMutation.isPending}
            className="w-full bg-slate-900 text-white font-black h-14 rounded-2xl hover:bg-slate-800 active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-100 disabled:opacity-70 mt-2"
          >
            {contactMutation.isPending ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>Send Request <ArrowRight size={20} /></>
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}