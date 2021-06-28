using Microsoft.EntityFrameworkCore;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Service.Models
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        { }
        public DbSet<catCharge> catCharge { get; set; }
        public DbSet<TransportRequestInfor> TransportRequestInfor { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=192.168.7.90;Database=eTMSTest;User ID=sa;Password=P@ssw0rd;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<TransportRequestInfor>(entity =>
            {
                //entity.HasKey(e => e.RefNo);
                entity.ToTable("TransportRequestInfor");

                entity.Property(e => e.RefNo).IsRequired();


                entity.Property(e => e.PlaceFrom).IsRequired();


                entity.Property(e => e.PlaceTo).IsRequired();

                entity.Property(e => e.DriverName).IsRequired();


                entity.Property(e => e.ExcutionDate).IsRequired();


                entity.Property(e => e.LicensePlate).IsRequired();

            });
        }
    }
}
