using Microsoft.AspNetCore.Identity;
using System;

namespace UI.WEB.Data
{
    public class ApplicationRole : IdentityRole<Guid>
    {
        public string DisplayName { get; set; }
    }
}
