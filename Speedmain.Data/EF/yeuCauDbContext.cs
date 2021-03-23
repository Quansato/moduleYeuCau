using Microsoft.EntityFrameworkCore;
using Speedmain.Data.Configuration;
using Speedmain.Data.Configurations;
using Speedmain.Data.Entities;

namespace Speedmain.Data.EF
{
    public class yeuCauDbContext : DbContext
    {
        public yeuCauDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new LoaiConfiguration());
            modelBuilder.ApplyConfiguration(new KhachHangConfiguration());
            modelBuilder.ApplyConfiguration(new YeuCauConfiguration());
            modelBuilder.ApplyConfiguration(new NhanVienConfiguration());
            modelBuilder.ApplyConfiguration(new TrangThaiConfiguration());
            modelBuilder.ApplyConfiguration(new MucDoConfiguration());
            modelBuilder.ApplyConfiguration(new UsersConfiguration());

            /*base.OnModelCreating(modelBuilder);*/
        }

        public DbSet<Loai> Loais { get; set; }
        public DbSet<TrangThai> TrangThais { get; set; }
        public DbSet<NhanVien> NhanViens { get; set; }
        public DbSet<MucDo> MucDos { get; set; }
        public DbSet<YeuCau> YeuCaus { get; set; }
        public DbSet<KhachHang> KhachHangs { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
