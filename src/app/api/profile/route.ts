import { NextResponse } from 'next/server'
import Prisma from '@prisma/client'
import prisma from '@/lib/prisma'

export async function POST(request: Request) {
  const data: Prisma.Profile = await request.json()
  try {
    const profile = await prisma.profile.create({ data })
    console.log(profile)
    return NextResponse.json(profile)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Algo deu errado' })
  }
}
