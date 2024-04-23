<template>
    <h2>Lịch sử mượn</h2>
    <div>
        
    </div>
</template>

<script>
    import theoDoiMuonSachService from "@/services/theoDoiMuonSach.service";
    
    export default {
        data() {
            return {
                LSMuon: []
            }
        },
        methods: {
            async fetchData(){
                this.LSMuon = await theoDoiMuonSachService.getByDocGia(this.$route.params.id)
            }
        }
    }
</script>