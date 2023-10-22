
import React, { useRef } from "react";
import { View, Text, Button, StyleSheet, Animated, SafeAreaView, ScrollView } from "react-native";

const Policyscreen = () => {

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.head}>กฎการใช้งานสนามกีฬา</Text>
        <View style={styles.container2}>
          <Text>1.ต้องแต่งกายด้วยชุดออกกำลังกายและสวมรองเท้าผ้าใบเท่านั้น</Text>
          <Text>2.ต้องจองล่วงหน้า 1 วัน</Text>
          <Text>3.สนามฟุตบอล สนามบาสเก็ตบอล ลู่วิ่ง ให้บริการฟรีทุกวัน หรือตามประกาศของสำนักงานบริหารทรัพย์สิน</Text>
          <Text>4.บางสนามกีฬาจะมีการเก็บค่าใช้จ่ายตามประเภทของสมาชิก</Text>
          <Text>5.สามารถยกเลิกการจองก่อนถึงเวลาจอง 2 ชั่วโมง ถ้ายกเลิกการจองเกินเวลาที่กำหนดจะถูกแบล็คลิสต</Text>
        </View>
        <Text style={styles.head}>การใช้บริการศูนย์กีฬา</Text>
        <View style={styles.container2}>
          <Text>สมาชิกของศูนย์กีฬาสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง แบ่งเป็น 4 ประเภท คือ</Text>
          <Text>1.นักศึกษาระดับปริญญาตรีของสถาบัน</Text>
          <Text>2.ข้าราชการ พนักงานหรือลูกจ้างของสถาบันและครอบครัว พนักงานหรือลูกจ้างของโรงเรียนสาธิตนานาชาติฯ และพนักงานหรือลูกจ้างของหลักสูตรอื่นๆที่จัดตั้งภายใต้สถาบัน นักศึกษาระดับปริญญาโท ระดับปริญญาเอก และศิษย์เก่าของสถาบัน รวมทั้งข้าราชการ พนักงานสถาบัน ลูกจ้างของสถาบันที่เกษียณอายุไปแล้ว</Text>
          <Text>3.นักเรียนโรงเรียนสาธิตนานาชาติสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง นักเรียนหรือนักศึกษาหลักสูตรอื่นๆ ที่จัดตั้งภายใต้สถาบัน</Text>
          <Text>4.บุคคลภายนอก</Text>
        </View>
        <Text>สมาชิกข้อ 1–3. ไม่ต้องเสียค่าสมัครสมาชิก</Text>
        <Text>สำหรับสมาชิกข้อ 4. ต้องเสียค่าสมัครสมาชิก 3,000 บาท/ปี</Text>
        <Text style={styles.mark}>ติดต่อสอบถามรายละเอียดได้ที่ 0898152054 / 0818272878</Text>
        <Text style={styles.mark}>หมายเหตุ : อัตรานี้ให้ใช้ตั้งแต่วันที่ 1 ตุลาคม 2562 เป็นต้นไป</Text>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "left",
    alignItems: "left",
    padding: 20,
  },
  container2: {
    // flex: 1,
    justifyContent: "left",
    alignItems: "left",
    paddingBottom:10
  },
  head: {
    flex:1,
    fontSize: 30,
    color: "orange",
    fontWeight: "bold",
    paddingBottom:10,
    paddingTop:10
  },
  mark: {
    color: "red",
    fontWeight: "bold",
    paddingTop:5
  }


});

export default Policyscreen;