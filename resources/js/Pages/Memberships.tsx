import MainLayout from '@/Layouts/MainLayout'
import Seo from '@/Components/Seo'
import PageHero from '@/Components/PageHero'
import MembershipsSection, { PublicMembership } from '@/Components/MembershipsSection'

interface Props {
    memberships: PublicMembership[]
}

export default function Memberships({ memberships = [] }: Props) {
    return (
        <MainLayout>
            <Seo
                title="Memberships & Affiliations - Trill & Associates Advocates"
                description="Explore the professional memberships and affiliations held by Trill & Associates Advocates and its advocates."
            />

            <PageHero
                eyebrow="Professional Standing"
                title="Memberships"
                accent="& Affiliations"
                description="Our professional memberships and institutional affiliations reflect our commitment to ethical practice, continuing legal development, and responsible advocacy."
                image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80"
                imageAlt="Professional legal documents"
                current="Memberships"
            />

            <MembershipsSection memberships={memberships} variant="white" showCta={false} />
        </MainLayout>
    )
}
