export function getSpecializationAndCounters(){
    let specializationData = {
            status: true,
            code: 200,
            data: [
              {
                id: 1,
                name: "جلدية"
              },
              {
                id: 2,
                name: "مخ واعصاب"
              },
              {
                id: 3,
                name: "اطفال"
              },
              {
                id: 4,
                name: "داخلية"
              },
              {
                id: 5,
                name: "نسائية"
              },
              {
                id: 6,
                name: "جراحة"
              }
            ],
            msg: ""
    }
    let countryData ={
            "status": true,
            "code": "200",
            "data": [
              {
                id: 1,
                name: "حمص"
              },
              {
                id: 2,
                name: "دمشق"
              },
              {
                id: 3,
                name: "حماه"
              },
              {
                id: 4,
                name: "حلب"
              },
              {
                id: 5,
                name: "طرطوس"
              },
              {
                id: 6,
                name: "اللاذقية"
              },
              {
                id: 7,
                name: "درعا"
              },
              {
                id: 8,
                name: "ديرالزور"
              }
            ],
            msg: ""
    }
    return { specializationData: specializationData , countryData: countryData}
}