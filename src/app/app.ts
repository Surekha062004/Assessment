import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FamilyMember {
  name: string;
  relationship: string;
  dob: string;
  phone: string;
}

interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  employee = {
    name: 'John Doe',
    team: 'UI/UX Design Team',
    role: 'Web Designer',
    employeeId: 'FT-0001',
    dateOfJoin: '1st Jan 2013',
    phone: '9876543210',
    email: 'johndoe@example.com',
    birthday: '24th July',
    address: '1861 Bayonne Ave, Manchester Township, NJ, 08759',
    gender: 'Male',
    reportsTo: 'Jeffery Lalor'
  };

  activeTab: 'profile' | 'projects' | 'bank' = 'profile';

  personalInfo = [
    { label: 'Passport No.', value: '9876543210' },
    { label: 'Passport Exp Date.', value: '9876543210' },
    { label: 'Tel', value: '9876543210', isLink: true },
    { label: 'Nationality', value: 'Indian' },
    { label: 'Religion', value: 'Christian' },
    { label: 'Marital status', value: 'Married' },
    { label: 'Employment of spouse', value: 'No' },
    { label: 'No. of children', value: '2' }
  ];

  emergencyPrimary = {
    name: 'John Doe',
    relationship: 'Father',
    phone: '9876543210, 9876543210'
  };

  emergencySecondary = {
    name: 'Karen Wills',
    relationship: 'Brother',
    phone: '9876543210, 9876543210'
  };

  bankInfo = [
    { label: 'Bank name', value: 'ICICI Bank' },
    { label: 'Bank account No.', value: '159843014641' },
    { label: 'IFSC Code', value: 'ICI24504' },
    { label: 'PAN No', value: 'TC000Y56' }
  ];

  familyMembers: FamilyMember[] = [
    { name: 'Leo', relationship: 'Brother', dob: 'Feb 16th, 2019', phone: '9876543210' }
  ];

  education: TimelineItem[] = [
    { title: 'International College of Arts and Science (UG)', subtitle: 'Bsc Computer Science', period: '2000 - 2003' },
    { title: 'International College of Arts and Science (PG)', subtitle: 'Msc Computer Science', period: '2000 - 2003' }
  ];

  experience: TimelineItem[] = [
    { title: 'Web Designer at Zen Corporation', subtitle: '', period: 'Jan 2013 - Present (5 years 2 months)' },
    { title: 'Web Designer at Ron-tech', subtitle: '', period: 'Jan 2013 - Present (5 years 2 months)' },
    { title: 'Web Designer at Dalt Technology', subtitle: '', period: 'Jan 2013 - Present (5 years 2 months)' }
  ];

  setTab(tab: 'profile' | 'projects' | 'bank'): void {
    this.activeTab = tab;
  }
}
