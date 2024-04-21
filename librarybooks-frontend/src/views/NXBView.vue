<template>
    <div>
      <h2>Danh sách NXB</h2>
      <table>
        <thead>
          <tr>
            <th>Tên NXB</th>
            <th>Địa chỉ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="nxb in nxbList" :key="nxb._id">
            <td>{{ nxb.TenNXB }}</td>
            <td>{{ nxb.DiaChi }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
  
<script>
  import NXBService from "@/services/nhaXuatBan.service";
  
  export default {
    data() {
      return {
        nxbList: []
      };
    },
    async created() {
      await this.fetchNXBList();
    },
    methods: {
      async fetchNXBList() {
        try {
          this.nxbList = await NXBService.getAll();
        } catch (error) {
          console.error("Error fetching NXB list:", error);
        }
      }
    }
  };
</script>
  
<style scoped>
  /* CSS cho bảng nếu cần */
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
  