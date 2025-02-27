export class CarMakeMapper {
  toDTO(carMake) {
    return carMake.toJSON();
  }

  toDTOs(carMakes) {
    return carMakes.map((carMake) => carMake.toJSON());
  }
}

export class CarTransmissionMapper {
  toDTO(carTransmission) {
    return carTransmission.toJSON();
  }

  toDTOs(carTransmissions) {
    return carTransmissions.map((carTransmission) => carTransmission.toJSON());
  }
}

export class CarModelMapper {
  toDTO(carModel) {
    return carModel.toJSON();
  }

  toDTOs(carModels) {
    return carModels.map((carModel) => carModel.toJSON());
  }
}

export class CarEngineMapper {
  toDTO(carEngine) {
    return carEngine.toJSON();
  }

  toDTOs(carEngines) {
    return carEngines.map((carEngine) => carEngine.toJSON());
  }
}

export class CarMapper {
  toDTO(car) {
    return car.toJSON();
  }

  toDTOs(cars) {
    return cars.map((car) => car.toJSON());
  }
}

export class ConsultationMapper {
  toDTO(consultation) {
    return consultation.toJSON();
  }

  toDTOs(consultations) {
    return consultations.map((consultation) => consultation.toJSON());
  }
}

export class CountryMapper {
  toDTO(country) {
    return country.toJSON();
  }

  toDTOs(countries) {
    return countries.map((country) => country.toJSON());
  }
}

export class FuelTypeMapper {
  toDTO(fuelType) {
    return fuelType.toJSON();
  }

  toDTOs(fuelTypes) {
    return fuelTypes.map((fuelType) => fuelType.toJSON());
  }
}

export class InquiryMapper {
  toDTO(inquiry) {
    return inquiry.toJSON();
  }

  toDTOs(inquiries) {
    return inquiries.map((inquiry) => inquiry.toJSON());
  }
}

export class LocationMapper {
  toDTO(location) {
    return location.toJSON();
  }

  toDTOs(locations) {
    return locations.map((location) => location.toJSON());
  }
}

export class MediaMapper {
  toDTO(media) {
    return media.toJSON();
  }

  toDTOs(medias) {
    return medias.map((media) => media.toJSON());
  }
}

export class RoleMapper {
  toDTO(role) {
    return role.toJSON();
  }

  toDTOs(roles) {
    return roles.map((role) => role.toJSON());
  }
}

export class UserMapper {
  toDTO(user) {
    return user.toJSON();
  }

  toDTOs(users) {
    return users.map((user) => user.toJSON());
  }
}
