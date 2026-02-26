"use client"

import { useState } from "react"
import axios from "axios"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const CTA = () => {
  const apiBaseUrl = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080").replace(/\/$/, "")

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    }

    try {
      setLoading(true)

      const res = await axios.post(
        `${apiBaseUrl}/register`,
        data
      )

      if (res.data) {
        alert("User registered successfully")
        // e.currentTarget.reset()
      }

    } catch (err: any) {
      console.error(err)
      alert(err?.response?.data?.message || "Registration failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 text-center">

      <h2 className="text-4xl font-bold mb-4">
        Ready to get started?
      </h2>

      <p className="text-gray-600 mb-6">
        Join millions of users using our platform
      </p>

      <Dialog>

        <DialogTrigger asChild>
          <Button className="bg-emerald-600 text-white px-6 py-3 rounded-full">
            Create Account
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-sm">

          <form onSubmit={handleSubmit}>

            <DialogHeader>
              <DialogTitle>
                Register Account
              </DialogTitle>

              <DialogDescription>
                Enter your details below
              </DialogDescription>
            </DialogHeader>

            <FieldGroup className="space-y-4 mt-4">

              <Field>
                <Label>Name</Label>
                <Input
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </Field>

              <Field>
                <Label>Email</Label>
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Field>

              <Field>
                <Label>Password</Label>
                <Input
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  required
                />
              </Field>

            </FieldGroup>

            <DialogFooter className="mt-6">

              <DialogClose asChild>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </DialogClose>

              <Button type="submit" disabled={loading}>
                {loading ? "Creating..." : "Create Account"}
              </Button>

            </DialogFooter>

          </form>

        </DialogContent>

      </Dialog>

    </section>
  )
}

export default CTA
