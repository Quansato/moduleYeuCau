using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Speedmain.Data.EF
{
    public class yeuCauDbContextFactory : IDesignTimeDbContextFactory<yeuCauDbContext>
    {
        public yeuCauDbContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration =new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            var connectionString = configuration.GetConnectionString("yeuCauDB");
            var optionsBuilder = new DbContextOptionsBuilder<yeuCauDbContext>();
            optionsBuilder.UseSqlServer(connectionString);

            return new yeuCauDbContext(optionsBuilder.Options);
        }
    }
}
