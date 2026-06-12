import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from 'type-graphql'
import { CreateAppointmentInput } from '../dtos/inputs/create-appointment-input.js'
import { Appointment } from '../dtos/models/appointment-model.js'
import { Customer } from '../dtos/models/customer-model.js'

const test = new CreateAppointmentInput()

test.startsAt

@Resolver(() => Appointment)
export class AppointmentsResolver {
  @Query(() => [Appointment])
  async appointments() {
    return [
      {
        startsAt: new Date(),
        endsAt: new Date(),
      },
    ]
  }

  @Mutation(() => Appointment)
  async createApointment(
    @Arg('data', () => CreateAppointmentInput) data: CreateAppointmentInput
  ) {
    const appointment: Appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    }

    return appointment
  }

  @FieldResolver(() => Customer)
  async customer(@Root() appointment: Appointment) {
    console.log(appointment)

    return {
      name: 'Fulano',
    }
  }
}
