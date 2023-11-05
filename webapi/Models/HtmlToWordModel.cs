namespace webapi.Models
{
    public class HtmlToWordModel
    {
        public string Program_Adi { get; set; } = string.Empty;
        public string Sirket_Adi { get; set; } = string.Empty;
        public string Baslik { get; set; } = string.Empty;
        public string Konu { get; set; } = string.Empty;
        public string Kategoriler { get; set; } = string.Empty;
        public string Etiketler { get; set; } = string.Empty;
        public string Aciklamalar { get; set; } = string.Empty;
        public string Durum { get; set; } = string.Empty;
        public string Belgeyi_Olusturan { get; set; } = string.Empty;
        public string En_Son_Belgeyi_Duzenleyen { get; set; } = string.Empty;
        public string Sayfa_Yonu { get; set; } = string.Empty; //Dikey veya Yatay
        public double Sayfa_Ust_Kenar_Boslugu { get; set; } = 0;
        public double Sayfa_Alt_Kenar_Boslugu { get; set; } = 0;
        public double Sayfa_Sag_Kenar_Boslugu { get; set; } = 0;
        public double Sayfa_Sol_Kenar_Boslugu { get; set; } = 0;

        // <Html><body>METİN İÇERİĞİ</body></html>
        public string Belge_Icerigi { get; set; }


    }
}
