﻿using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cars.Application.CarSteeringWheels.Commands.DeleteSteeringWheel
{
    public class DeleteSteeringWheelCommand : IRequest
    {
        public Guid Id { get; set; }
    }
}
