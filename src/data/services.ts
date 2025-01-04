import {
  Banknote,
  Phone,
  Zap,
  Droplet,
  Flame,
  Shield,
  Building,
  Train,
  Bus,
  Plane,
  ArrowRight
} from 'lucide-react';

export const services = {
  'Money Transfer': {
    icon: Banknote,
    description: 'Send and receive money instantly with bank-grade security',
    items: [
      { icon: Phone, name: 'Pay using Mobile Number', description: 'Quick transfers to mobile numbers' },
      { icon: Banknote, name: 'UPI Payments', description: 'Instant UPI transfers' },
      { icon: Building, name: 'Bank Transfers', description: 'Direct bank account transfers' },
      { icon: ArrowRight, name: 'Request Money', description: 'Request payments from others' }
    ]
  },
  'Bills & Recharge': {
    icon: Phone,
    description: 'Manage all your utility bills and recharges in one place',
    items: [
      { icon: Phone, name: 'Mobile Recharge', description: 'Prepaid mobile recharge' },
      { icon: Phone, name: 'Postpaid Bills', description: 'Mobile postpaid bill payments' },
      { icon: Zap, name: 'Electricity', description: 'Electricity bill payments' },
      { icon: Droplet, name: 'Water', description: 'Water bill payments' },
      { icon: Flame, name: 'Gas', description: 'Gas bill payments' }
    ]
  },
  'Financial Services': {
    icon: Shield,
    description: 'Access loans, insurance, and investment options easily',
    items: [
      { icon: Shield, name: 'Insurance', description: 'Protect what matters' },
      { icon: Building, name: 'Loans', description: 'Quick loan applications' }
    ]
  },
  'Travel Bookings': {
    icon: Train,
    description: 'Book your travel tickets with exclusive discounts',
    items: [
      { icon: Train, name: 'Train Tickets', description: 'Book train tickets' },
      { icon: Bus, name: 'Bus Tickets', description: 'Book bus tickets' },
      { icon: Plane, name: 'Flight Tickets', description: 'Book flight tickets' }
    ]
  }
} as const;