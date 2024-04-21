<template>
    <div>
      <h2>Theo dõi mượn sách</h2>
      <table>
        <thead>
          <tr>
            <th>Tên Sách</th>
            <th>Tên độc giả</th>
            <th>Ngày mượn</th>
            <th>Ngày trả</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tdms in TDMSList" :key="tdms._id">
            <td>{{ tdms.MaSach }}</td>
            <td>{{ tdms.MaDocGia }}</td>
            <td>{{ tdms.NgayMuon }}</td>
            <td>{{ tdms.NgayTra }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
  
<script>
  import TheoDoiMuonSachService from "@/services/theoDoiMuonSach.service";
  import SachService from "@/services/sach.service";
  import DocGiaService from "@/services/docGia.service";
  
  export default {
    data() {
      return {
        TDMSList: []
      };
    },
    async created() {
      await this.fetchSachList();
    },
    methods: {
      async fetchSachList() {
        try {
          this.TDMSList = await TheoDoiMuonSachService.getAll();
          await Promise.all(this.TDMSList.map(async (element) => {
            const sach = await SachService.get(element.MaSach);
            element.MaSach = sach.TenSach;
            const docgia = await DocGiaService.get(element.MaDocGia);
            element.MaDocGia = docgia.HoLot + ' ' + docgia.Ten;
          }));
        } catch (error) {
          console.error("Error fetching Theo dõi mượn sách list:", error);
        }
      }
    }
  };
</script>
  
<style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  th {
    background-color: #f2f2f2;
  }
</style>