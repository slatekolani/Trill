<?php

namespace Database\Seeders;

use App\Models\TeamMember;
use Illuminate\Database\Seeder;

class TeamMemberSeeder extends Seeder
{
    public function run(): void
    {
        $members = [
            [
                'name'          => 'Managing Partner',
                'role'          => 'Senior Advocate',
                'initials'      => 'MP',
                'bio'           => 'A highly regarded commercial advocate with over 20 years of experience in corporate law, complex commercial transactions, and cross-border investment matters across East Africa. He leads the firm\'s Corporate & Commercial and Investment Advisory practices.',
                'languages'     => ['English', 'Kiswahili'],
                'practice_areas'=> ['Corporate & Commercial Law', 'Investment & Business Advisory', 'Mergers & Acquisitions'],
                'education'     => [
                    ['degree' => 'LLB (Hons)', 'institution' => 'University of Dar-es-Salaam'],
                    ['degree' => 'LLM, Commercial Law', 'institution' => 'University of London'],
                ],
                'memberships'   => ['Tanganyika Law Society (TLS)', 'East Africa Law Society (EALS)'],
                'sort_order'    => 1,
            ],
            [
                'name'          => 'Head of Litigation',
                'role'          => 'Senior Advocate',
                'initials'      => 'HL',
                'bio'           => 'A specialist in high-stakes civil and commercial litigation with an outstanding record before the High Court, Court of Appeal, and specialised tribunals of Tanzania.',
                'languages'     => ['English', 'Kiswahili'],
                'practice_areas'=> ['Dispute Resolution', 'Civil Litigation', 'Constitutional Law'],
                'education'     => [
                    ['degree' => 'LLB (Hons)', 'institution' => 'University of Dar-es-Salaam'],
                    ['degree' => 'Post-Graduate Diploma in Legal Practice', 'institution' => 'Law School of Tanzania'],
                ],
                'memberships'   => ['Tanganyika Law Society (TLS)', 'International Bar Association (IBA)'],
                'sort_order'    => 2,
            ],
            [
                'name'          => 'Intellectual Property Counsel',
                'role'          => 'Associate Advocate',
                'initials'      => 'IP',
                'bio'           => 'An expert in intellectual property law with particular focus on trademark prosecution, copyright enforcement, and technology contracts for local and international clients.',
                'languages'     => ['English', 'Kiswahili', 'French'],
                'practice_areas'=> ['Intellectual Property', 'Technology Law', 'Cyber-crime Law'],
                'education'     => [
                    ['degree' => 'LLB (Hons)', 'institution' => 'University of Dar-es-Salaam'],
                    ['degree' => 'Certificate in IP Law', 'institution' => 'WIPO Academy'],
                ],
                'memberships'   => ['Tanganyika Law Society (TLS)', 'ARIPO'],
                'sort_order'    => 3,
            ],
            [
                'name'          => 'Tax & Finance Partner',
                'role'          => 'Senior Advocate',
                'initials'      => 'TF',
                'bio'           => 'A specialist in taxation and banking law with deep knowledge of Tanzania\'s revenue authority framework, transfer pricing, and financial sector regulation.',
                'languages'     => ['English', 'Kiswahili'],
                'practice_areas'=> ['Taxation', 'Banking & Finance', 'Oil & Gas', 'Regulatory Compliance'],
                'education'     => [
                    ['degree' => 'LLB (Hons)', 'institution' => 'University of Dar-es-Salaam'],
                    ['degree' => 'LLM Taxation', 'institution' => 'University of Cape Town'],
                ],
                'memberships'   => ['Tanganyika Law Society (TLS)', 'International Fiscal Association (IFA)'],
                'sort_order'    => 4,
            ],
        ];

        foreach ($members as $data) {
            TeamMember::firstOrCreate(
                ['name' => $data['name'], 'role' => $data['role']],
                $data + ['is_active' => true, 'avatar_url' => null, 'email' => null]
            );
        }
    }
}
