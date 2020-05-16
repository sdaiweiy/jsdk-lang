import IDate from "../src/IDate";
import {expect} from "chai";
import "mocha";

describe("add function", () => {
    it("basic", () => {
        let d1 = new Date(2015, 11, 21, 12, 21, 21);
        IDate.add(d1, 1,IDate.YEAR);
        expect(IDate.getYear(d1)).to.be.equal(2016);

        IDate.add(d1, 1,IDate.MONTH);
        expect(IDate.getYear(d1)).to.be.equal(2017);
        expect(IDate.getMonth(d1)).to.be.equal(0);

        IDate.add(d1, 1,IDate.DAY);
        expect(IDate.getDay(d1)).to.be.equal(22);
        IDate.add(d1, -1,IDate.DAY);
        expect(IDate.getDay(d1)).to.be.equal(21);

        IDate.add(d1, 1,IDate.HOUR);
        expect(IDate.getHours(d1)).to.be.equal(13);

        IDate.add(d1, 1,IDate.MINUTE);
        expect(IDate.getMinutes(d1)).to.be.equal(22);

        IDate.add(d1, 1,IDate.SECOND);
        expect(IDate.getSeconds(d1)).to.be.equal(22);
    });
});

describe("after function", () => {
    it("basic", () => {
        let d1 = new Date(2015, 12, 21, 12, 21, 21);
        let d2 = new Date(2015, 12, 21, 12, 21, 21);
        let d3 = new Date(2015, 12, 21, 12, 21, 22);
        let d4 = new Date(2015, 12, 21, 12, 21, 12);

        expect(IDate.after(d1, d2)).to.be.false;
        expect(IDate.after(d1, d3)).to.be.false;
        expect(IDate.after(d1, d4)).to.be.true;
    });
});

describe("before function", () => {
    it("basic", () => {
        let d1 = new Date(2015, 12, 21, 12, 21, 21);
        let d2 = new Date(2015, 12, 21, 12, 21, 21);
        let d3 = new Date(2015, 12, 21, 12, 21, 22);

        expect(IDate.before(d1, d2)).to.be.false;
        expect(IDate.before(d1, d3)).to.be.true;
    });
});

describe("between function", () => {
    it("basic", () => {
        let d1 = new Date(2015, 12, 21, 12, 21, 21);
        let d3 = new Date(2015, 12, 21, 12, 21, 22);
        let d4 = new Date(2015, 12, 21, 12, 21, 12);

        expect(IDate.between(d1, d4, d3)).to.be.true;
        expect(IDate.between(d1, d3, d4)).to.be.false;
    });
});

describe("compareTo function", () => {
    it("basic", () => {
        let d1 = new Date(2015, 12, 21, 12, 21, 21);
        let d2 = new Date(2015, 12, 21, 12, 21, 21);

        expect(IDate.compareTo(d1, d2)).to.be.equal(0);

        let d3 = new Date(2015, 12, 21, 12, 21, 22);
        expect(IDate.compareTo(d1, d3) < 0).to.be.true;

        let d4 = new Date(2015, 12, 21, 12, 21, 12);
        expect(IDate.compareTo(d1, d4) > 0).to.be.true;
    });
});

describe("format function", () => {
    it("basic", () => {
        let date = new Date(2010, 8, 3);//月份日期为1位数
        let dateFormat = IDate.format(date, "yyyy-M-d");//年用4位表示
        expect(dateFormat).to.be.equal("2010-9-3");
        dateFormat = IDate.format(date, "yyyy-MM-d");
        expect(dateFormat).to.be.equal("2010-09-3");
        dateFormat = IDate.format(date, "yyyy-MM-dd");
        expect(dateFormat).to.be.equal("2010-09-03");
        dateFormat = IDate.format(date, "yy-MM-d");//年用2位表示
        expect(dateFormat).to.be.equal("10-09-3");

        date = new Date(2009, 11, 20);//月份日期为2位数
        dateFormat = IDate.format(date, "yyyy-M-d");
        expect(dateFormat).to.be.equal("2009-12-20");
        dateFormat = IDate.format(date, "yy-MM-d");
        expect(dateFormat).to.be.equal("09-12-20");
        dateFormat = IDate.format(date, "yy-MM-dd");
        expect(dateFormat).to.be.equal("09-12-20");
        dateFormat = IDate.format(date, "yy-M-d");
        expect(dateFormat).to.be.equal("09-12-20");
        dateFormat = IDate.format(date, "M-d");
        expect(dateFormat).to.be.equal("12-20");

        dateFormat = IDate.format(date, "yyyy年MM月dd日");//中文格式
        expect(dateFormat).to.be.equal("2009年12月20日");
        dateFormat = IDate.format(date, "yyyy/MM/dd");//斜线
        expect(dateFormat).to.be.equal("2009/12/20");

        date = new Date(2010, 9, 3, 2, 2, 9, 568);//没有超过12点
        dateFormat = IDate.format(date, "yyyy-MM-dd HH:mm:ss.SSS");
        expect(dateFormat).to.be.equal("2010-10-03 02:02:09.568");
        dateFormat = IDate.format(date, "yyyy-MM-dd H:mm:ss");
        expect(dateFormat).to.be.equal("2010-10-03 2:02:09");
        dateFormat = IDate.format(date, "yyyy-MM-dd HH:m:ss");
        expect(dateFormat).to.be.equal("2010-10-03 02:2:09");
        dateFormat = IDate.format(date, "yyyy-MM-dd HH:mm:s");
        expect(dateFormat).to.be.equal("2010-10-03 02:02:9");
        dateFormat = IDate.format(date, "yyyy-MM-dd H:m:s");
        expect(dateFormat).to.be.equal("2010-10-03 2:2:9");

        date = new Date(2010, 8, 15, 16, 15, 47, 256);//超过12点
        dateFormat = IDate.format(date, "yyyy-MM-dd HH:mm:ss");
        expect(dateFormat).to.be.equal("2010-09-15 16:15:47");
        dateFormat = IDate.format(date, "yy-MM-dd H:m:s");
        expect(dateFormat).to.be.equal("10-09-15 16:15:47");
        dateFormat = IDate.format(date, "M/dd H:m:s");//斜线
        expect(dateFormat).to.be.equal("9/15 16:15:47");

        date = new Date(2010, 9, 3, 2, 2, 9, 568);//没有超过12点
        dateFormat = IDate.format(date, "yyyy-MM-dd hh:mm:ss");
        expect(dateFormat).to.be.equal("2010-10-03 02:02:09");
        dateFormat = IDate.format(date, "yyyy-MM-dd h:mm:ss");
        expect(dateFormat).to.be.equal("2010-10-03 2:02:09");
        dateFormat = IDate.format(date, "yyyy-MM-dd hh:m:ss");
        expect(dateFormat).to.be.equal("2010-10-03 02:2:09");
        dateFormat = IDate.format(date, "yyyy-MM-dd hh:mm:s");
        expect(dateFormat).to.be.equal("2010-10-03 02:02:9");
        dateFormat = IDate.format(date, "yyyy-MM-dd h:m:s");
        expect(dateFormat).to.be.equal("2010-10-03 2:2:9");

        date = new Date(2010, 8, 15, 16, 15, 47, 256);//超过12点,强制转换为12小时制
        dateFormat = IDate.format(date, "yyyy-MM-dd hh:mm:ss");
        expect(dateFormat).to.be.equal("2010-09-15 04:15:47");
        dateFormat = IDate.format(date, "yyyy-MM-dd h:m:s");
        expect(dateFormat).to.be.equal("2010-09-15 4:15:47");

        dateFormat = IDate.format(date, "yyyy/M/dd h:m:s");//斜线
        expect(dateFormat).to.be.equal("2010/9/15 4:15:47");

        dateFormat = IDate.format(date, "M/dd hh:m:s");//斜线
        expect(dateFormat).to.be.equal("9/15 04:15:47");
    });
});

describe("formatDateToFriendly function", () => {
    it("basic", () => {
        let date = new Date();
        expect(IDate.formatToFriendly(date)).to.be.equal("刚刚");

        IDate.setMinutes(date, IDate.getMinutes(date) - 30);
        expect(IDate.formatToFriendly(date)).to.be.equal("一小时前");

        IDate.setHours(date, IDate.getHours(date) - 5);
        expect(IDate.formatToFriendly(date)).to.be.equal(IDate.format(date, "HH:mm"));

        IDate.setDay(date, IDate.getDay(date) - 2);
        expect(IDate.formatToFriendly(date)).to.be.equal(IDate.format(date, "yyyy年MM月dd日"));
    });

    it("custom pattern", () => {
        let friendlyPattern = {
            "HH:mm:ss": 86400,
            "yyyy年MM月dd日": -1
        };

        let date = new Date();
        expect(IDate.formatToFriendly(date, friendlyPattern)).to.be.equal(IDate.format(date, "HH:mm:ss"));

        IDate.setMinutes(date, IDate.getMinutes(date) - 30);
        expect(IDate.formatToFriendly(date, friendlyPattern)).to.be.equal(IDate.format(date, "HH:mm:ss"));

        IDate.setHours(date, IDate.getHours(date) - 5);
        expect(IDate.formatToFriendly(date, friendlyPattern)).to.be.equal(IDate.format(date, "HH:mm:ss"));

        IDate.setDay(date, IDate.getDay(date) - 2);
        expect(IDate.formatToFriendly(date, friendlyPattern)).to.be.equal(IDate.format(date, "yyyy年MM月dd日"));
    });
});

describe("getDay function", () => {
    it("basic", () => {
        let date = new Date(2010, 8, 3);
        expect(IDate.getDay(date)).to.be.equal(date.getDate());
    });
});

describe("getDayOfWeek function", () => {
    it("basic", () => {
        let d1 = new Date(2015, 0, 3, 12, 34, 12, 128);
        expect(IDate.getDayOfWeek(d1)).to.be.equal(6);
    });
});

describe("getDayOfWeekInMonth function", () => {
    it("basic", () => {
        let d1 = new Date(2015, 0, 3, 12, 34, 12, 128);
        expect(IDate.getDayOfWeekInMonth(d1)).to.be.equal(1);
    });
});

describe("getDayOfYear function", () => {
    it("basic", () => {
        let d1 = new Date(2015, 0, 3, 12, 34, 12, 128);
        expect(IDate.getDayOfYear(d1)).to.be.equal(3);
    });
});

describe("getHours function", () => {
    it("basic", () => {
        let date = new Date(2010, 8, 3, 21, 13, 15);
        expect(IDate.getHours(date)).to.be.equal(date.getHours());
    });
});

describe("getMilliseconds function", () => {
    it("basic", () => {
        let date = new Date(2010, 8, 3, 21, 13, 15);
        expect(IDate.getMilliseconds(date)).to.be.equal(date.getMilliseconds());
    });
});

describe("getMinutes function", () => {
    it("basic", () => {
        let date = new Date(2010, 8, 3, 21, 13, 15);
        expect(IDate.getMinutes(date)).to.be.equal(date.getMinutes());
    });
});

describe("getMonth function", () => {
    it("basic", () => {
        let date = new Date(2010, 8, 3);
        expect(IDate.getMonth(date)).to.be.equal(date.getMonth());
    });
});

describe("getQuarter function", () => {
    it("basic", () => {
        let d1 = new Date(2015, 1, 1);
        let d2 = new Date(2015, 5, 1);
        let d3 = new Date(2015, 8, 1);
        let d4 = new Date(2015, 11, 31);

        expect(IDate.getQuarter(d1)).to.be.equal(1);
        expect(IDate.getQuarter(d2)).to.be.equal(2);
        expect(IDate.getQuarter(d3)).to.be.equal(3);
        expect(IDate.getQuarter(d4)).to.be.equal(4);
    });
});

describe("getSeconds function", () => {
    it("basic", () => {
        let date = new Date(2010, 8, 3, 21, 13, 15);
        expect(IDate.getSeconds(date)).to.be.equal(date.getSeconds());
    });
});

describe("getTime function", () => {
    it("basic", () => {
        let date = new Date(2010, 8, 3, 21, 13, 15);
        expect(IDate.getTime(date)).to.be.equal(date.getTime());
    });
});

describe("getWeekOfMonth function", () => {
    it("basic", () => {
        let d1 = new Date(2015, 0, 3, 12, 34, 12, 128);
        expect(IDate.getWeekOfMonth(d1)).to.be.equal(5);
    });
});

describe("getWeekOfYear function", () => {
    it("basic", () => {
        let d1 = new Date(2015, 0, 3, 12, 34, 12, 128);
        expect(IDate.getWeekOfYear(d1)).to.be.equal(52);
    });
});

describe("getYear function", () => {
    it("basic", () => {
        let date = new Date(2010, 8, 3);
        expect(IDate.getYear(date)).to.be.equal(date.getFullYear());
    });
});

describe("isDate function", () => {
    it("basic", () => {
        expect(IDate.isDate(void 0)).to.be.false;
        expect(IDate.isDate(100)).to.be.false;
        expect(IDate.isDate({})).to.be.false;
        expect(IDate.isDate(new Date())).to.be.true;
    });
});

describe("isLeapYear function", () => {
    it("basic", () => {
        expect(IDate.isLeapYear(2015)).to.be.equal(false);
        expect(IDate.isLeapYear(2016)).to.be.equal(true);

        let d1 = new Date(2016, 11, 12);
        expect(IDate.isLeapYear(d1)).to.be.equal(true);
    });
});


describe("minus function", () => {
    it("basic", () => {
        let d1 = new Date(2015, 0, 3, 12, 34, 12, 128);
        let d2 = new Date(2015, 0, 3, 13, 35, 13, 128);

        expect(IDate.minus(d1, d2, IDate.MILLISECOND)).to.be.equal(3661000);
        expect(IDate.minus(d1, d2, IDate.SECOND)).to.be.equal(3661);
        expect(IDate.minus(d1, d2, IDate.MINUTE)).to.be.equal(61);
        expect(IDate.minus(d1, d2, IDate.HOUR)).to.be.equal(1);
        expect(IDate.minus(d2, d1, IDate.HOUR)).to.be.equal(-1);
    });
});


describe("parse function", () => {
    it("basic", () => {
        let date = IDate.parse("2007-10-23");
        expect(date.getFullYear()).to.be.equal(2007);
        expect(date.getMonth()).to.be.equal(9);
        expect(date.getDate()).to.be.equal(23);

        date = IDate.parse("98-11-25");
        expect(date.getFullYear()).to.be.equal(1998);
        expect(date.getMonth()).to.be.equal(10);
        expect(date.getDate()).to.be.equal(25);

        date = IDate.parse("1998/6/25", "yyyy/MM/dd");
        expect(date.getFullYear()).to.be.equal(1998);
        expect(date.getMonth()).to.be.equal(5);
        expect(date.getDate()).to.be.equal(25);
        date = IDate.parse("98/10/25", "yyyy/MM/dd");
        expect(date.getFullYear()).to.be.equal(1998);
        expect(date.getMonth()).to.be.equal(9);
        expect(date.getDate()).to.be.equal(25);

        date = IDate.parse("2007-10-23 12:23:15", "yyyy-MM-dd HH:mm:ss");
        expect(date.getFullYear()).to.be.equal(2007);
        expect(date.getMonth()).to.be.equal(9);
        expect(date.getDate()).to.be.equal(23);
        expect(date.getHours()).to.be.equal(12);
        expect(date.getMinutes()).to.be.equal(23);
        expect(date.getSeconds()).to.be.equal(15);
    });
});

describe("setDay function", () => {
    it("basic", () => {
        let date = new Date(2010, 8, 3);
        expect(IDate.getDay(date)).to.be.equal(date.getDate());

        IDate.setDay(date, 4);
        expect(IDate.getDay(date)).to.be.equal(date.getDate());
    });
});

describe("setHours function", () => {
    it("basic", () => {
        let date = new Date(2010, 8, 3, 21, 13, 15);
        expect(IDate.getHours(date)).to.be.equal(date.getHours());

        IDate.setHours(date, 12);
        expect(IDate.getHours(date)).to.be.equal(date.getHours());
    });
});

describe("setMilliseconds function", () => {
    it("basic", () => {
        let date = new Date(2010, 8, 3, 21, 13, 15);
        expect(IDate.getMilliseconds(date)).to.be.equal(date.getMilliseconds());

        IDate.setMilliseconds(date, 121);
        expect(IDate.getMilliseconds(date)).to.be.equal(date.getMilliseconds());
    });
});

describe("setMinutes function", () => {
    it("basic", () => {
        let date = new Date(2010, 8, 3, 21, 13, 15);
        expect(IDate.getMinutes(date)).to.be.equal(date.getMinutes());

        IDate.setMinutes(date, 12);
        expect(IDate.getMinutes(date)).to.be.equal(date.getMinutes());
    });
});

describe("setMonth function", () => {
    it("basic", () => {
        let date = new Date(2010, 8, 3);
        expect(IDate.getMonth(date)).to.be.equal(date.getMonth());

        IDate.setMonth(date, 4);
        expect(IDate.getMonth(date)).to.be.equal(date.getMonth());
    });
});

describe("setSeconds function", () => {
    it("basic", () => {
        let date = new Date(2010, 8, 3, 21, 13, 15);
        expect(IDate.getSeconds(date)).to.be.equal(date.getSeconds());

        IDate.setSeconds(date, 30);
        expect(IDate.getSeconds(date)).to.be.equal(date.getSeconds());
    });
});

describe("setYear function", () => {
    it("basic", () => {
        let date = new Date(2010, 8, 3);
        expect(IDate.getMonth(date)).to.be.equal(date.getMonth());

        IDate.setYear(date, 1999);
        expect(IDate.getMonth(date)).to.be.equal(date.getMonth());
    });
});

describe("setTime function", () => {
    it("basic", () => {
        let date = new Date(2010, 8, 3, 21, 13, 15);
        expect(IDate.getTime(date)).to.be.equal(date.getTime());

        IDate.setTime(date, new Date().getTime());
        expect(IDate.getTime(date)).to.be.equal(date.getTime());
    });
});

describe("toJson function", () => {
    it("basic", () => {
        let date = new Date(2017, 8, 9, 18, 54, 4, 395);
        expect(IDate.toJson(date)).to.be.equal("2017-09-09T18:54:04.395Z");
    });
});

describe("toString function", () => {
    it("basic", () => {
        let date = new Date(2017, 8, 9, 18, 54, 4, 395);
        expect(IDate.toString(date)).to.be.equal("Sat Sep 09 2017 18:54:04 GMT+0800 (中国标准时间)");
    });
});
