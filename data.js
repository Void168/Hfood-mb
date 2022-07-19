const restaurants = [
  {
      name: 'Cộng cà phê',
      image:
        'https://media.foody.vn/res/g25/249533/prof/s/foody-mobile-cong-caphe-jpg-838-636228565117879924.jpg',
      categories: ['Cà phê', 'Đồ uống'],
      price: '40.000-80.000',
      reviews: 2209,
      rating: 4.7,
      deliverTime: '15-20',
      menuItems: [
        {
          name: 'Chanh Tươi Tuyết',
          description:
            'Một cách biến tấu mới lạ từ quả chanh căng mọng. Chanh tươi tuyết xốp mịn, bồng bềnh, thanh mát, nhất định phải thử trong mùa hè này.',
          price: '55000',
          image:
            'https://images.foody.vn/res/g2/12504/s/270a662e-cac2-444b-f8d8-87607de205ab.jpg',
          reviews: 150,
          rating: 4.5,
          category: 'Trái cây',
        },
        {
          name: 'Trà Sữa Macchiato',
          description:
            'Macchiato là tên gọi của một loại cà phê Ý, gồm có cà phê espresso và lớp sữa phía trên được tạo bọt. Có lẽ vì thế, macchiato còn được gọi là espresso macchiato hoặc cà phê macchiato.',
          price: '59000',
          image:
            'https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/VNITE20220522150212010119/detail/f562b06b83a04dbcbba577abb34919a2_1653231732086346531.webp',
          reviews: 200,
          rating: 4.3,
          category: 'Trà sữa',
        },
        {
          name: 'Hà Nội sấu soda',
          description:
            'Mùa hè oi bức đến cũng là thời điểm mà Hà Nội bước vào mùa sấu, thậm chí nước sấu. Sự kết hợp với soda thơm ngon giải nhiệt cấp tốc cho mùa hè nóng nực.',
          price: '49000',
          image:
            'https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/AWjz8baj2bMmVZfr_mC--CZJ2VEN3VNEFA2/detail/2ededf355f924980944307dd1d61add2_1594486867642648953.webp',
          reviews: 50,
          rating: 4.6,
          category: 'Đồ địa phương',
        },
        {
          name: 'Cốt dừa cà phê',
          description:
            'Được lấy cảm hứng từ “Kem Tràng Tiền” – hương vị mà bất cứ người Hà Nội nào cũng nhớ, Sinh Tố Cộng Đổi Mới với phần cốt dừa đặc trưng là thức uống ngon nổi trội và được yêu thích nhất tại Cộng. Cốt dừa béo ngậy, thơm ngọt kết hợp với cà phê đắng thanh, nồng nàn là lựa chọn không thể bỏ qua!',
          price: '49000',
          image:
            'https://images.foody.vn/res/g20/197054/prof/s/foody-upload-api-foody-mobile-hmzz-200421180449.jpg',
          reviews: 250,
          rating: 4.4,
          category: 'Sinh tố cộng đổi mới',
        },
        {
          name: 'Cà phê nâu',
          description:
            'Bạn sẽ chẳng thể tìm được ở đâu khác ngoài Việt Nam một ly Cà Phê Nâu - sự kết hợp kỳ lạ mà hoàn hảo giữa cà phê đen đắng và một chút sữa đặc béo ngọt.',
          price: '35000',
          image:
            'https://caphenguyenchat.vn/wp-content/uploads/2018/03/net-rieng-trong-pha-che-cafe-cua-mot-quoc-gia-2.jpg',
          reviews: 180,
          rating: 4.2,
          category: 'Cà phê ta',
        },
      ],
    },
    {
      name: 'Tous Les Jours',
      image: 'https://yt.cdnxbvn.com/medias/list.com.vn/29753/TLJ-Da-Nang.jpg',
      category: 'Bánh',
      price: '30.000-120.000',
      reviews: 1608,
      rating: 4.6,
      deliverTime: '10-25',
      menuItems: [
        {
          name: 'Chanh Tươi Tuyết',
          description:
            'Một cách biến tấu mới lạ từ quả chanh căng mọng. Chanh tươi tuyết xốp mịn, bồng bềnh, thanh mát, nhất định phải thử trong mùa hè này.',
          price: '55000',
          image:
            'https://images.foody.vn/res/g2/12504/s/270a662e-cac2-444b-f8d8-87607de205ab.jpg',
          reviews: 150,
          rating: 4.5,
          category: 'Trái cây',
        },
        {
          name: 'Trà Sữa Macchiato',
          description:
            'Macchiato là tên gọi của một loại cà phê Ý, gồm có cà phê espresso và lớp sữa phía trên được tạo bọt. Có lẽ vì thế, macchiato còn được gọi là espresso macchiato hoặc cà phê macchiato.',
          price: '59000',
          image:
            'https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/VNITE20220522150212010119/detail/f562b06b83a04dbcbba577abb34919a2_1653231732086346531.webp',
          reviews: 200,
          rating: 4.3,
          category: 'Trà sữa',
        },
        {
          name: 'Hà Nội sấu soda',
          description:
            'Mùa hè oi bức đến cũng là thời điểm mà Hà Nội bước vào mùa sấu, thậm chí nước sấu. Sự kết hợp với soda thơm ngon giải nhiệt cấp tốc cho mùa hè nóng nực.',
          price: '49000',
          image:
            'https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/AWjz8baj2bMmVZfr_mC--CZJ2VEN3VNEFA2/detail/2ededf355f924980944307dd1d61add2_1594486867642648953.webp',
          reviews: 50,
          rating: 4.6,
          category: 'Đồ địa phương',
        },
        {
          name: 'Cốt dừa cà phê',
          description:
            'Được lấy cảm hứng từ “Kem Tràng Tiền” – hương vị mà bất cứ người Hà Nội nào cũng nhớ, Sinh Tố Cộng Đổi Mới với phần cốt dừa đặc trưng là thức uống ngon nổi trội và được yêu thích nhất tại Cộng. Cốt dừa béo ngậy, thơm ngọt kết hợp với cà phê đắng thanh, nồng nàn là lựa chọn không thể bỏ qua!',
          price: '49000',
          image:
            'https://images.foody.vn/res/g20/197054/prof/s/foody-upload-api-foody-mobile-hmzz-200421180449.jpg',
          reviews: 250,
          rating: 4.4,
          category: 'Sinh tố cộng đổi mới',
        },
        {
          name: 'Cà phê nâu',
          description:
            'Bạn sẽ chẳng thể tìm được ở đâu khác ngoài Việt Nam một ly Cà Phê Nâu - sự kết hợp kỳ lạ mà hoàn hảo giữa cà phê đen đắng và một chút sữa đặc béo ngọt.',
          price: '35000',
          image:
            'https://caphenguyenchat.vn/wp-content/uploads/2018/03/net-rieng-trong-pha-che-cafe-cua-mot-quoc-gia-2.jpg',
          reviews: 180,
          rating: 4.2,
          category: 'Cà phê ta',
        },
      ],
    },
    {
      name: 'McDonald',
      image:
        'https://media.foody.vn/res/g5/47293/prof/s/image-8803f31a-200910114158.jpeg',
      category: 'Bánh',
      price: '30.000-360.000',
      reviews: 1103,
      rating: 4.3,
      deliverTime: '10-25',
      menuItems: [
        {
          name: 'Chanh Tươi Tuyết',
          description:
            'Một cách biến tấu mới lạ từ quả chanh căng mọng. Chanh tươi tuyết xốp mịn, bồng bềnh, thanh mát, nhất định phải thử trong mùa hè này.',
          price: '55000',
          image:
            'https://images.foody.vn/res/g2/12504/s/270a662e-cac2-444b-f8d8-87607de205ab.jpg',
          reviews: 150,
          rating: 4.5,
          category: 'Trái cây',
        },
        {
          name: 'Trà Sữa Macchiato',
          description:
            'Macchiato là tên gọi của một loại cà phê Ý, gồm có cà phê espresso và lớp sữa phía trên được tạo bọt. Có lẽ vì thế, macchiato còn được gọi là espresso macchiato hoặc cà phê macchiato.',
          price: '59000',
          image:
            'https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/VNITE20220522150212010119/detail/f562b06b83a04dbcbba577abb34919a2_1653231732086346531.webp',
          reviews: 200,
          rating: 4.3,
          category: 'Trà sữa',
        },
        {
          name: 'Hà Nội sấu soda',
          description:
            'Mùa hè oi bức đến cũng là thời điểm mà Hà Nội bước vào mùa sấu, thậm chí nước sấu. Sự kết hợp với soda thơm ngon giải nhiệt cấp tốc cho mùa hè nóng nực.',
          price: '49000',
          image:
            'https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/AWjz8baj2bMmVZfr_mC--CZJ2VEN3VNEFA2/detail/2ededf355f924980944307dd1d61add2_1594486867642648953.webp',
          reviews: 50,
          rating: 4.6,
          category: 'Đồ địa phương',
        },
        {
          name: 'Cốt dừa cà phê',
          description:
            'Được lấy cảm hứng từ “Kem Tràng Tiền” – hương vị mà bất cứ người Hà Nội nào cũng nhớ, Sinh Tố Cộng Đổi Mới với phần cốt dừa đặc trưng là thức uống ngon nổi trội và được yêu thích nhất tại Cộng. Cốt dừa béo ngậy, thơm ngọt kết hợp với cà phê đắng thanh, nồng nàn là lựa chọn không thể bỏ qua!',
          price: '49000',
          image:
            'https://images.foody.vn/res/g20/197054/prof/s/foody-upload-api-foody-mobile-hmzz-200421180449.jpg',
          reviews: 250,
          rating: 4.4,
          category: 'Sinh tố cộng đổi mới',
        },
        {
          name: 'Cà phê nâu',
          description:
            'Bạn sẽ chẳng thể tìm được ở đâu khác ngoài Việt Nam một ly Cà Phê Nâu - sự kết hợp kỳ lạ mà hoàn hảo giữa cà phê đen đắng và một chút sữa đặc béo ngọt.',
          price: '35000',
          image:
            'https://caphenguyenchat.vn/wp-content/uploads/2018/03/net-rieng-trong-pha-che-cafe-cua-mot-quoc-gia-2.jpg',
          reviews: 180,
          rating: 4.2,
          category: 'Cà phê ta',
        },
      ],
    },
    {
      name: 'Burger King',
      image: 'https://images.deliveryhero.io/image/fd-no/LH/n3vl-hero.jpg',
      category: 'Bánh',
      price: '40.000-270.000',
      reviews: 1809,
      rating: 4.4,
      deliverTime: '10-15',
      menuItems: [
        {
          name: 'Chanh Tươi Tuyết',
          description:
            'Một cách biến tấu mới lạ từ quả chanh căng mọng. Chanh tươi tuyết xốp mịn, bồng bềnh, thanh mát, nhất định phải thử trong mùa hè này.',
          price: '55000',
          image:
            'https://images.foody.vn/res/g2/12504/s/270a662e-cac2-444b-f8d8-87607de205ab.jpg',
          reviews: 150,
          rating: 4.5,
          category: 'Trái cây',
        },
        {
          name: 'Trà Sữa Macchiato',
          description:
            'Macchiato là tên gọi của một loại cà phê Ý, gồm có cà phê espresso và lớp sữa phía trên được tạo bọt. Có lẽ vì thế, macchiato còn được gọi là espresso macchiato hoặc cà phê macchiato.',
          price: '59000',
          image:
            'https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/VNITE20220522150212010119/detail/f562b06b83a04dbcbba577abb34919a2_1653231732086346531.webp',
          reviews: 200,
          rating: 4.3,
          category: 'Trà sữa',
        },
        {
          name: 'Hà Nội sấu soda',
          description:
            'Mùa hè oi bức đến cũng là thời điểm mà Hà Nội bước vào mùa sấu, thậm chí nước sấu. Sự kết hợp với soda thơm ngon giải nhiệt cấp tốc cho mùa hè nóng nực.',
          price: '49000',
          image:
            'https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/AWjz8baj2bMmVZfr_mC--CZJ2VEN3VNEFA2/detail/2ededf355f924980944307dd1d61add2_1594486867642648953.webp',
          reviews: 50,
          rating: 4.6,
          category: 'Đồ địa phương',
        },
        {
          name: 'Cốt dừa cà phê',
          description:
            'Được lấy cảm hứng từ “Kem Tràng Tiền” – hương vị mà bất cứ người Hà Nội nào cũng nhớ, Sinh Tố Cộng Đổi Mới với phần cốt dừa đặc trưng là thức uống ngon nổi trội và được yêu thích nhất tại Cộng. Cốt dừa béo ngậy, thơm ngọt kết hợp với cà phê đắng thanh, nồng nàn là lựa chọn không thể bỏ qua!',
          price: '49000',
          image:
            'https://images.foody.vn/res/g20/197054/prof/s/foody-upload-api-foody-mobile-hmzz-200421180449.jpg',
          reviews: 250,
          rating: 4.4,
          category: 'Sinh tố cộng đổi mới',
        },
        {
          name: 'Cà phê nâu',
          description:
            'Bạn sẽ chẳng thể tìm được ở đâu khác ngoài Việt Nam một ly Cà Phê Nâu - sự kết hợp kỳ lạ mà hoàn hảo giữa cà phê đen đắng và một chút sữa đặc béo ngọt.',
          price: '35000',
          image:
            'https://caphenguyenchat.vn/wp-content/uploads/2018/03/net-rieng-trong-pha-che-cafe-cua-mot-quoc-gia-2.jpg',
          reviews: 180,
          rating: 4.2,
          category: 'Cà phê ta',
        },
      ],
    },
    {
      name: 'Phúc Long',
      image: 'https://phuclong.com.vn/uploads/store/83943c23fd8b7a-ntmk.jpg',
      category: 'Bánh',
      price: '40.000-100.000',
      reviews: 3098,
      rating: 4.8,
      deliverTime: '10-15',
      menuItems: [
        {
          name: 'Chanh Tươi Tuyết',
          description:
            'Một cách biến tấu mới lạ từ quả chanh căng mọng. Chanh tươi tuyết xốp mịn, bồng bềnh, thanh mát, nhất định phải thử trong mùa hè này.',
          price: '55000',
          image:
            'https://images.foody.vn/res/g2/12504/s/270a662e-cac2-444b-f8d8-87607de205ab.jpg',
          reviews: 150,
          rating: 4.5,
          category: 'Trái cây',
        },
        {
          name: 'Trà Sữa Macchiato',
          description:
            'Macchiato là tên gọi của một loại cà phê Ý, gồm có cà phê espresso và lớp sữa phía trên được tạo bọt. Có lẽ vì thế, macchiato còn được gọi là espresso macchiato hoặc cà phê macchiato.',
          price: '59000',
          image:
            'https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/VNITE20220522150212010119/detail/f562b06b83a04dbcbba577abb34919a2_1653231732086346531.webp',
          reviews: 200,
          rating: 4.3,
          category: 'Trà sữa',
        },
        {
          name: 'Hà Nội sấu soda',
          description:
            'Mùa hè oi bức đến cũng là thời điểm mà Hà Nội bước vào mùa sấu, thậm chí nước sấu. Sự kết hợp với soda thơm ngon giải nhiệt cấp tốc cho mùa hè nóng nực.',
          price: '49000',
          image:
            'https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/AWjz8baj2bMmVZfr_mC--CZJ2VEN3VNEFA2/detail/2ededf355f924980944307dd1d61add2_1594486867642648953.webp',
          reviews: 50,
          rating: 4.6,
          category: 'Đồ địa phương',
        },
        {
          name: 'Cốt dừa cà phê',
          description:
            'Được lấy cảm hứng từ “Kem Tràng Tiền” – hương vị mà bất cứ người Hà Nội nào cũng nhớ, Sinh Tố Cộng Đổi Mới với phần cốt dừa đặc trưng là thức uống ngon nổi trội và được yêu thích nhất tại Cộng. Cốt dừa béo ngậy, thơm ngọt kết hợp với cà phê đắng thanh, nồng nàn là lựa chọn không thể bỏ qua!',
          price: '49000',
          image:
            'https://images.foody.vn/res/g20/197054/prof/s/foody-upload-api-foody-mobile-hmzz-200421180449.jpg',
          reviews: 250,
          rating: 4.4,
          category: 'Sinh tố cộng đổi mới',
        },
        {
          name: 'Cà phê nâu',
          description:
            'Bạn sẽ chẳng thể tìm được ở đâu khác ngoài Việt Nam một ly Cà Phê Nâu - sự kết hợp kỳ lạ mà hoàn hảo giữa cà phê đen đắng và một chút sữa đặc béo ngọt.',
          price: '35000',
          image:
            'https://caphenguyenchat.vn/wp-content/uploads/2018/03/net-rieng-trong-pha-che-cafe-cua-mot-quoc-gia-2.jpg',
          reviews: 180,
          rating: 4.2,
          category: 'Cà phê ta',
        },
      ],
    },
  ]

export default restaurants
