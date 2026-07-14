import { usePage } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'
import Seo from '@/Components/Seo'
import PageHero from '@/Components/PageHero'
import MembershipsSection, { PublicMembership } from '@/Components/MembershipsSection'
import { block } from '@/lib/content'

export default function About({ memberships = [] }: { memberships?: PublicMembership[] }) {
    const { contentBlocks = {} } = usePage<{ contentBlocks?: Record<string, string> }>().props

    return (
        <MainLayout>
            <Seo
                title="About Us - Trill & Associates Advocates"
                description="Learn about Trill & Associates Advocates, a modern Tanzanian law firm serving clients from Dar-es-Salaam across Tanzania, East Africa, and beyond."
            />

            <PageHero
                eyebrow={block(contentBlocks, 'about_hero_eyebrow', 'Our Story')}
                title={block(contentBlocks, 'about_hero_heading', 'About Our')}
                accent={block(contentBlocks, 'about_hero_subheading', 'Firm')}
                description={block(contentBlocks, 'about_hero_text', 'For over 15 years, Trill & Associates Advocates has provided strategic, practical, and commercially sound legal counsel from Dar-es-Salaam.')}
                image="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1920&q=80"
                imageAlt="Law library"
                current="About Us"
            />

            <section className="py-20 bg-gold-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
                        <div>
                            <p className="text-gold-700 text-sm tracking-[0.24em] uppercase font-medium mb-4">{block(contentBlocks, 'about_intro_eyebrow', 'Who We Are')}</p>
                            <h2 className="section-title mb-2">
                                {block(contentBlocks, 'about_intro_heading', 'Modern Legal Counsel')}
                            </h2>
                            <span className="gold-line" />
                        </div>
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p>
                                {block(contentBlocks, 'about_intro_text_1', 'Trill & Associates Advocates serves businesses, institutions, investors, and private clients with clear legal strategy grounded in Tanzanian law and commercial reality.')}
                            </p>
                            <p>
                                {block(contentBlocks, 'about_intro_text_2', 'Our work is built around careful preparation, direct communication, and advice that helps clients move forward with confidence.')}
                            </p>
                        </div>
                    </div>
                    <div className="mt-14 grid border border-gold-200 bg-white md:grid-cols-3">
                        {[
                            ['Commercially grounded', 'Advice is shaped around the client’s business reality, not legal theory alone.'],
                            ['Courtroom ready', 'Matters are prepared with discipline whether they settle early or proceed to hearing.'],
                            ['Dar-es-Salaam based', 'A Tanzanian practice with regional and international client awareness.'],
                        ].map(([title, text]) => (
                            <div key={title} className="border-b border-gold-200 p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                                <p className="font-serif text-xl font-semibold text-navy-950">{title}</p>
                                <p className="mt-3 text-sm leading-7 text-gray-500">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <MembershipsSection memberships={memberships} variant="light" />

            <section className="bg-white border-y border-gold-100">
                <div className="grid lg:grid-cols-2">
                    <div className="p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-gold-100">
                        <p className="text-gold-700 text-xs tracking-[0.3em] uppercase font-medium mb-3">{block(contentBlocks, 'about_mission_eyebrow', 'Our Mission')}</p>
                        <h2 className="font-serif text-navy-950 text-3xl font-semibold mb-5">{block(contentBlocks, 'about_mission_heading', 'Practical Counsel, Clear Direction')}</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {block(contentBlocks, 'about_mission_text', 'We vigorously represent our clients while maintaining the honor and dignity of the justice system. Every matter is handled with trust, care, and professional judgment.')}
                        </p>
                    </div>
                    <div className="p-10 lg:p-16">
                        <p className="text-gold-700 text-xs tracking-[0.3em] uppercase font-medium mb-3">{block(contentBlocks, 'about_vision_eyebrow', 'Our Vision')}</p>
                        <h2 className="font-serif text-navy-950 text-3xl font-semibold mb-5">{block(contentBlocks, 'about_vision_heading', 'Reliable Legal Excellence')}</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {block(contentBlocks, 'about_vision_text', 'To deliver reliable legal services tailored to our clients requirements locally in Tanzania and internationally, with precision and dedication.')}
                        </p>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}
