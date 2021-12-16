using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Business.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Gabriel",
                    Email = "drozd@test.com",
                    UserName = "drozd@test.com",
                    Address = new Address
                    {
                        FirstName = "Gabriel",
                        LastName = "Drozd",
                        City = "Rzeszow",
                        Voivodeship = "Subcarpathia",
                        ZipCode = "35-000"
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}