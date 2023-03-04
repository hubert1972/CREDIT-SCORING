using Microsoft.AspNetCore.Identity;
using System;
using UI.WEB.Models;

namespace UI.WEB.Data
{
    public class ApplicationUser : IdentityUser<Guid>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumberAlt { get; set; }
        public Guid Sucursal { get; set; }
        public Guid State { get; set; }
        public Guid Cargo { get; set; }

        public const string STATE_ACTIVE = "65715445-6F21-441B-8F3E-C2F68A9F7E50";
        public const string STATE_INACTIVE = "489BF35B-7C98-4315-9F06-A0C9A7032446";
    }
}
