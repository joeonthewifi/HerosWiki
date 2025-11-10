import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
	return (
		<div className="flex flex-col">
			<section className="relative overflow-hidden">
				<div className="container py-16 md:py-24">
					<div className="flex flex-col items-center gap-8">
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
							<h1 className="text-center text-4xl md:text-6xl font-bold dark:text-white text-black">
								ImHer0&apos;s Wiki
							</h1>
						</div>

						<section className="container pt-6 md:pt-12">
							<div className="flex flex-col gap-8">
								<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
									<Link
										href="/docs/withers-wrath"
										className="group flex flex-col gap-4 p-6 rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:-translate-y-1"
									>
										<div className="flex items-center gap-3">
											<div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
												<Image
													src="/icons/witherswrathicon.png"
													alt="Wither's Wrath"
													width={40}
													height={40}
													className="rounded"
												/>
											</div>
											<h3 className="text-2xl font-upheaval text-[#4f057e]">
												Wither&apos;s Wrath
											</h3>
										</div>
										<p className="text-sm text-muted-foreground leading-relaxed">
											Enhanced wither boss fights
										</p>
									</Link>

									<Link
										href="/docs/modular-golems"
										className="group flex flex-col gap-4 p-6 rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:-translate-y-1"
									>
										<div className="flex items-center gap-3">
											<div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
												<Image
													src="/icons/modulargolemsicon.png"
													alt="Modular Golems"
													width={40}
													height={40}
													className="rounded"
												/>
											</div>
											<h3 className="text-2xl font-bebasNeue">Modular Golems</h3>
										</div>
										<p className="text-sm text-muted-foreground leading-relaxed">
											Customizable iron golems with various upgrades
										</p>
									</Link>

									<Link
										href="/docs/imher0"
										className="group flex flex-col gap-4 p-6 rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:-translate-y-1"
									>
										<div className="flex items-center gap-3">
											<div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
												<Image
													src="/icons/sluj.png"
													alt="About ImHer0"
													width={40}
													height={40}
													className="rounded"
												/>
											</div>
											<h3 className="text-md font-minecraft">ImHer0</h3>
										</div>
										<p className="text-sm text-muted-foreground leading-relaxed">
											My datapacks and more
										</p>
									</Link>
								</div>
							</div>
						</section>
					</div>
				</div>
			</section>
		</div>
	)
}
