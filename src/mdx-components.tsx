import defaultMdxComponents from 'fumadocs-ui/mdx'
import type { MDXComponents } from 'mdx/types'

export function getMDXComponents(components?: MDXComponents): MDXComponents {
	return {
		...defaultMdxComponents,
		h1: ({ className, ...props }) => (
			<h1
				className={`text-4xl font-bold mb-4 mt-6 ${className || ''}`}
				{...props}
			/>
		),
		h2: ({ className, ...props }) => (
			<h2
				className={`text-3xl font-semibold mb-3 mt-5 ${className || ''}`}
				{...props}
			/>
		),
		h3: ({ className, ...props }) => (
			<h3
				className={`text-2xl font-semibold mb-2 mt-4 ${className || ''}`}
				{...props}
			/>
		),
		h4: ({ className, ...props }) => (
			<h4
				className={`text-xl font-semibold mb-2 mt-3 ${className || ''}`}
				{...props}
			/>
		),
		p: ({ className, ...props }) => (
			<p className={`mb-4 leading-7 ${className || ''}`} {...props} />
		),
		ul: ({ className, ...props }) => (
			<ul
				className={`list-disc pl-6 mb-4 space-y-2 ${className || ''}`}
				{...props}
			/>
		),
		ol: ({ className, ...props }) => (
			<ol
				className={`list-decimal pl-6 mb-4 space-y-2 ${className || ''}`}
				{...props}
			/>
		),
		li: ({ className, ...props }) => (
			<li className={`mb-1 ${className || ''}`} {...props} />
		),
		img: ({ className, ...props }) => (
			<img className={`inline-block align-middle ${className || ''}`} {...props} />
		),
		a: ({ className, ...props }) => (
			<a
				className={`text-primary hover:underline ${className || ''}`}
				{...props}
			/>
		),
		code: ({ className, ...props }) => (
			<code
				className={`bg-muted px-1.5 py-0.5 rounded text-sm font-mono ${
					className || ''
				}`}
				{...props}
			/>
		),
		pre: ({ className, ...props }) => (
			<pre
				className={`bg-muted p-4 rounded-lg overflow-x-auto mb-4 ${
					className || ''
				}`}
				{...props}
			/>
		),
		blockquote: ({ className, ...props }) => (
			<blockquote
				className={`border-l-4 border-muted-foreground pl-4 italic my-4 ${
					className || ''
				}`}
				{...props}
			/>
		),
		table: ({ className, ...props }) => (
			<table
				className={`w-full border-collapse mb-4 ${className || ''}`}
				{...props}
			/>
		),
		th: ({ className, ...props }) => (
			<th
				className={`border border-border px-4 py-2 text-left font-semibold ${
					className || ''
				}`}
				{...props}
			/>
		),
		td: ({ className, ...props }) => (
			<td
				className={`border border-border px-4 py-2 ${className || ''}`}
				{...props}
			/>
		),
		...components,
	}
}
