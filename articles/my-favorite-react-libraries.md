---
title: "My Favorite React Libraries"
date: "2026-07-11"
description: "Here is a list of my fovorite react libraries that i use in production grade applications."
author: Faraji Shikanda Ombonya
---

# My Favorite React 3rd Party Libraries

Here is an unorderd list of my favorite third party react libraries that I use
in production grade applications.

## React Hook Form

React hook form provides a powerful set of hooks and components for working
with forms.

Provide a controller component that you can use to turn basic UI components
into form components

## Zod

Zod offers an elegant approach to defining form schemas and TypeScript types.
From one zod schema definition, you get a type to use with TypeScript, validation
rules and error messages to use with react hook form.

## Axios

My favorite axios feature is the interceptor. Interceptors work like
middleware in other programming languages.

For example you can add a response interceptor that will refresh the access
token any time a request returns a 401 response, therefore the rest of the
application does not need to worry about tokens expiring.

You could also write a request interceptor that intercepts the request
and adds an Authorization token to the Headers.

Another neat feature with axios is that it automatically removes keys with
undefined values from a payload.

## Tanstack Query

The best features of tanstack , in my opinion are, the useQuery and the
useMutation hooks.

With useQuery, you can:

- Define a query, and configure it's query key, and whever the query
  key changes, the query is rerun. The best place to apply this is with query
  parameters. With this setup, when any of the query parameter changes, tne
  query is refetched.
- You can also set the enable parameter to defined precicely the conditions
  under which a query is able to run.
- For data that rarely changes on the backend, you can set the garbage
  collection and stale time so your client does not need to refetch the data
  every time untill it is considered stale or is garbage collected.

## Shadcn

Shadcn is a component library that gives you a set of reusable building
blocks. Here are some of the features I love about shadcn.

- Ability to customize the theme global css variables
- Ability to compose complex UIs from simple building blocks
- Ability to add components as you need them
- A library of 3rd party components

## Date fns

Date fns is my go to library whenever I want to work with dates. It offers a
comprehensive set of utility functions to do just about anything.

# Conclusion

To finish up, here's how I use these libraries together in a typical CRUD
application powered by a react web client.

1. Create a new application with React, Vite, **Shadcn** and Typescript.
2. Setup a react query provider, to use with tanstack query.
3. Setup a reusable axios hook with request and response interceptor where
   neccesary.
4. Setup tanstack hooks for each endpoint. For example, if I have a Book
   resource, I create a `useBook`, `useBooks`, `useBookCreate`,
   `useBookUpdate`, `useBookCreate`
5. Define zod schemas for my Create forms.
6. Generate type definitions from the zod schemas
