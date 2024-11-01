import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','name','admin','createdAt','updatedAt','deletedAt']);

export const CategoryScalarFieldEnumSchema = z.enum(['id','name','createdAt','updatedAt']);

export const ThreadScalarFieldEnumSchema = z.enum(['id','title','createdAt','updatedAt','deletedAt','userId','categoryId']);

export const PostScalarFieldEnumSchema = z.enum(['id','content','createdAt','updatedAt','deletedAt','threadId','userId','parentPostId']);

export const ReportScalarFieldEnumSchema = z.enum(['id','reason','createdAt','postId','userId']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  admin: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// CATEGORY SCHEMA
/////////////////////////////////////////

export const CategorySchema = z.object({
  id: z.number().int(),
  name: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Category = z.infer<typeof CategorySchema>

/////////////////////////////////////////
// THREAD SCHEMA
/////////////////////////////////////////

export const ThreadSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
  userId: z.number().int(),
  categoryId: z.number().int(),
})

export type Thread = z.infer<typeof ThreadSchema>

/////////////////////////////////////////
// POST SCHEMA
/////////////////////////////////////////

export const PostSchema = z.object({
  id: z.number().int(),
  content: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
  threadId: z.number().int(),
  userId: z.number().int(),
  parentPostId: z.number().int().nullable(),
})

export type Post = z.infer<typeof PostSchema>

/////////////////////////////////////////
// REPORT SCHEMA
/////////////////////////////////////////

export const ReportSchema = z.object({
  id: z.number().int(),
  reason: z.string(),
  createdAt: z.coerce.date(),
  postId: z.number().int(),
  userId: z.number().int(),
})

export type Report = z.infer<typeof ReportSchema>
