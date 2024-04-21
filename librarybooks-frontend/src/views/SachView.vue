<template>
    <div>
      <h2>Sách hiện có</h2>
      <table>
        <thead>
          <tr>
            <th>Tên Sách</th>
            <th>Đơn giá (x1000đ)</th>
            <th>Số quyển</th>
            <th>Năm xuất bản</th>
            <th>Nhà xuất bản</th>
            <th>Nguồn gốc</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="sach in SachList" :key="sach._id">
            <td>{{ sach.TenSach }}</td>
            <td>{{ sach.DonGia }}</td>
            <td>{{ sach.SoQuyen }}</td>
            <td>{{ sach.NamXuatBan }}</td>
            <td>{{ sach.MaNXB }}</td>
            <td>{{ sach.NguonGoc }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
  
<script>
  import SachService from "@/services/sach.service";
  import NXBService from "@/services/nhaXuatBan.service";
  
  export default {
    data() {
      return {
        SachList: []
      };
    },
    async created() {
      await this.fetchSachList();
    },
    methods: {
      async fetchSachList() {
        try {
          this.SachList = await SachService.getAll();
          await Promise.all(this.SachList.map(async (element) => {
            const NXB = await NXBService.get(element.MaNXB);
            element.MaNXB = NXB.TenNXB;
          }));
        } catch (error) {
          console.error("Error fetching Sach list:", error);
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