using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoronaContactRegistration.Models;
using CoronaContactRegistration.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CoronaContactRegistration.Controllers
{
    [ApiController]
    public class ContactInformationController : ControllerBase
    {
        private readonly ContactInformationService _contactInfoService;

        public ContactInformationController(ContactInformationService contactInfoService)
        {
            _contactInfoService = contactInfoService;
        }

        // POST /api/customerdata/upload
        [HttpPost("/api/[controller]/upload")]
        public IActionResult Upload([FromBody]ContactInformation data) 
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            _contactInfoService.Create(data);

            return Ok();
        }
    }
}
