import { appointmentCard } from './appointmentCard';

export interface appointmentSort{
  onQueue:appointmentCard[],
  onWaiting: appointmentCard[],
  onPending: appointmentCard[],
  onFinished: appointmentCard[]
}
