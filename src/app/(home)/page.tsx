import Link from 'next/link'
import Image from 'next/image'
import { UserIcon } from 'lucide-react'

export default function HomePage() {
	return (
		<div className="flex flex-col">
			<section className="relative overflow-hidden border-b bg-linear-to-b from-background to-secondary/20">
				<div className="container py-16 md:py-24">
					<div className="flex flex-col items-center text-center gap-8">
						<div className="relative size-32 md:size-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
							<Image
								src="https://avatars.githubusercontent.com/u/81053166?v=4"
								alt="ImHer0 Profile"
								fill
								className="object-cover"
								priority
							/>
						</div>

						<div className="flex flex-col gap-4 max-w-2xl">
							<h1 className="text-4xl md:text-6xl font-bold dark:text-white text-black">
								ImHer0&apos;s Wiki
							</h1>
						</div>
					</div>
				</div>
			</section>

			<section className="container py-16 md:py-24">
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-2">
						<h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
						<p className="text-muted-foreground text-lg">
							Projects and documentation.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						<Link
							href="/docs/withers-wrath"
							className="group flex flex-col gap-4 p-6 rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:-translate-y-1"
						>
							<div className="flex items-start gap-3">
								<div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
									<Image
										src="/icons/witherswrathicon.png"
										alt="Wither's Wrath"
										width={40}
										height={40}
										className="rounded"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<h3 className="font-bold text-xl">Wither&apos;s Wrath</h3>
									<div className="flex items-center gap-2 text-sm text-muted-foreground">
										<span className="px-2 py-0.5 rounded bg-orange-500/10 text-orange-500 font-medium">
											Datapack
										</span>
									</div>
								</div>
							</div>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Wither's Wrath.
							</p>
						</Link>

						<Link
							href="/docs/upcoming-pack"
							className="group flex flex-col gap-4 p-6 rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:-translate-y-1"
						>
							<div className="flex items-start gap-3">
								<div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
									<Image
										src="/icons/modulargolemsicon.png"
										alt="Upcoming Pack"
										width={40}
										height={40}
										className="rounded"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<h3 className="font-bold text-xl">Modular Golems</h3>
									<div className="flex items-center gap-2 text-sm text-muted-foreground">
										<span className="px-2 py-0.5 rounded bg-green-500/10 text-green-500 font-medium">
											Datapack
										</span>
									</div>
								</div>
							</div>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Modular Golems.
							</p>
						</Link>

						<Link
							href="/docs/imher0"
							className="group flex flex-col gap-4 p-6 rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:-translate-y-1"
						>
							<div className="flex items-start gap-3">
								<div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
									<Image
										src="/icons/sluj.png"
										alt="About ImHer0"
										width={40}
										height={40}
										className="rounded"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<h3 className="font-bold text-xl">About ImHer0</h3>
									<div className="flex items-center gap-2 text-sm text-muted-foreground">
										<span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 font-medium">
											Info
										</span>
									</div>
								</div>
							</div>
							<p className="text-sm text-muted-foreground leading-relaxed">
								About ImHer0.
							</p>
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}
