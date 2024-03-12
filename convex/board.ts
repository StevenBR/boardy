import { v } from "convex/values"

import { mutation } from "./_generated/server"

const images = [
  "/placeholders/1.svg",
  "/placeholders/10.svg",
  "/placeholders/2.svg",
  "/placeholders/3.svg",
  "/placeholders/4.svg",
  "/placeholders/5.svg",
  "/placeholders/6.svg"
]

export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string()
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUsersIdentity()

    if (!identity) {
      throw new Error("Unauthorized")
    }

    const randomImages = images[Math.floor(Math.random() * images.length)]
  }
})
