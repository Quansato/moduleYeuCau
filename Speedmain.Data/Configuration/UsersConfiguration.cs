using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Speedmain.Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Speedmain.Data.Configuration
{
    class UsersConfiguration: IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("User");

            builder.HasKey(x => x.Ma);

            builder.Property(x => x.Ma).UseIdentityColumn();

            builder.Property(x => x.TenUS).IsRequired().IsUnicode(true).HasMaxLength(50);

            builder.Property(x => x.Email).IsRequired().IsUnicode(true).HasMaxLength(50);

            builder.Property(x => x.SDT).IsRequired().IsUnicode(true).HasMaxLength(11);

            builder.Property(x => x.DiaChi).IsRequired().IsUnicode(true).HasMaxLength(50);
        }
    }
}
