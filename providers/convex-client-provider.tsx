'use client'


import { ClerkProvider, useAuth } from "@clerk/nextjs"
import { ConvexProviderWithClerk } from "convex/react-clerk"
import {
  AuthLoading,
  Authenticated,
  ConvexReactClient,
} from "convex/react"
import { ReactNode } from "react"

import { Loading } from '@/components/auth/loading';

// custom way to provide authentication for the whole app, works similar to a layout. but is providing the convex/clerk functionality
interface ConvexClientProviderProps {
  children: ReactNode
}

const convexURL = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexURL)

export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>
          {children}
        </Authenticated>
        <AuthLoading>
          <Loading />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}
