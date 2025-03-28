import Link from "next/link"
import Image from "next/image"
import { DogIcon as Wolf, Users, Calendar, Clock, MapPin, ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function GymLanding() {
  return (
    <div className="flex min-h-screen flex-col">
      <header
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Wolf className="h-6 w-6" />
            <span className="text-xl font-bold">WolfGym</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </Link>
            <Link
              href="#memberships"
              className="text-sm font-medium transition-colors hover:text-primary">
              Memberships
            </Link>
            <Link
              href="#trainers"
              className="text-sm font-medium transition-colors hover:text-primary">
              Trainers
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium transition-colors hover:text-primary">
              Testimonials
            </Link>
            <Link
              href="#location"
              className="text-sm font-medium transition-colors hover:text-primary">
              Location
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="#location"
              className="hidden md:block text-sm font-medium transition-colors hover:text-primary">
              Location
            </Link>
            <Button>Join Now</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div
              className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    ¿No tienes límites? Nosotros tampoco
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Bienvenido a una nueva Era.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    View Membership Plans
                  </Button>
                </div>
              </div>
              <Image
                src="/wolfgym.webp"
                width={550}
                height={700}
                alt="Icono de WolfGym"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Nuestras facilidades
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Céntrate únicamente en lo importante
                </h2>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Maquinaria nueva, entrenadores personales, suplementación
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Wolf className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Equipamiento moderno</CardTitle>
                    <CardDescription>Lo último en maquinaria</CardDescription>
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Users className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Entrenadores personales</CardTitle>
                    <CardDescription>Profesionales que podrán guiarte en tu camino</CardDescription>
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Calendar className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Boxeo</CardTitle>
                    <CardDescription>Una disciplina que no te puedes perder</CardDescription>
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Clock className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Acceso 24/7</CardTitle>
                    <CardDescription>Abierto todos los días del año para tí</CardDescription>
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <MapPin className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>En pleno centro</CardTitle>
                    <CardDescription>Cerca de ti</CardDescription>
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Users className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Comunidad</CardTitle>
                    <CardDescription>Únete a la gran comunidad que estamos creando</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Membership Plans */}
        <section id="memberships" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Membership Plans</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that fits your lifestyle and fitness goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Mensual</CardTitle>
                  <CardDescription>Perfect for beginners</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col items-center justify-center">
                  <div className="text-5xl font-bold mb-2">39,90€</div>
                  <div className="text-sm text-muted-foreground">cada mes</div>
                </CardContent>
               
              </Card>
              <Card className="flex flex-col border-primary">
                <CardHeader className="bg-primary text-primary-foreground">
                  <div className="text-sm font-medium uppercase">Trimestral</div>
                  <CardTitle className="text-primary-foreground">Alpha</CardTitle>
                  <CardDescription className="text-primary-foreground/90">
                    For dedicated fitness enthusiasts
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col items-center justify-center">
                  <div className="text-5xl font-bold mb-2">109€</div>
                  <div className="text-sm text-muted-foreground">cada tres meses</div>
                </CardContent>
              
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Anual</CardTitle>
              
                </CardHeader>
                <CardContent className="flex-1 flex flex-col items-center justify-center">
                  <div className="text-5xl font-bold mb-2">349€</div>
                  <div className="text-sm text-muted-foreground">anual</div>
                </CardContent>
               
              </Card>
            </div>
          </div>
        </section>

        {/* Location/Map Section */}
        <section id="location" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Encuentranos</h2>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conveniently located in the heart of the city. Stop by for a tour or start your fitness journey today.
                </p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Localización</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Francesc Tarrega, Villareal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Abierto 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>info@wolfgyms.es</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Button size="lg" className="gap-1">
                    Get Directions <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="aspect-video overflow-hidden rounded-xl border bg-muted">
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.0882117674323!2d-0.0982942235968018!3d39.93941648455134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6006e1cd48e1fb%3A0x618882c517ff519a!2sAv.%20Francesc%20T%C3%A0rrega%2C%2034%2C%2012540%20Vila-real%2C%20Castell%C3%B3!5e0!3m2!1ses!2ses!4v1743101243388!5m2!1ses!2ses"
                    width="100%" height="100%"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                    
                    </iframe>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div
          className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Wolf className="h-6 w-6" />
            <span className="text-lg font-bold">WolfGym</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} WolfGym. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/policies/privacy-policy"
              className="text-sm font-medium hover:underline underline-offset-4">
              Política de privacidad
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

