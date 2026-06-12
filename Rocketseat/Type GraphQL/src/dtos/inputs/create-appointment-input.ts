import { Field, InputType } from 'type-graphql'

@InputType()
export class CreateAppointmentInput {
  @Field((type) => String)
  customerId: string

  @Field((type) => Date)
  startsAt: Date

  @Field((type) => Date)
  endsAt: Date
}
