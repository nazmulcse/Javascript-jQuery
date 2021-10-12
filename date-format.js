function addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + parseInt(days));
        return formatDateToDMY(result, 'dmy');
    }
    /**
    * Format date from dd-mm-yy to yy-mm-dd
    * @param String date
    * @param String format dmy or ymd
    */
     function formatDate(date, format){
        if(!date){
            return '0000-00-00';
        }
        var dd = date.substring(0, 2);
        var mm = date.substring(3, 5);
        var yy = date.substring(6);
        if (format == 'dmy') {
            return dd + '-'  + mm + '-' + yy;
        } else {
            return yy + '-' + mm + '-' + dd;
        }
    }
    /**
     *
     * @param Date date
     * @param string format 'dmy' or 'ymd
     * @returns
     */
    function formatDateToDMY(date, format) {
        var year = date.getFullYear().toString();
        var month = (date.getMonth() + 101).toString().substring(1);
        var day = (date.getDate() + 100).toString().substring(1);
        //return day + "-"  +  month + "-" + year;
        if (format == 'dmy') {
            return day + "-"  +  month + "-" + year;
        } else {
            return year + "-" + month + "-" + day;
        }
    }

    /**
     *
     * @param {String} format dmy or ymd
     * @returns current date
     */
    function getCurrentDate(format) {
        date = new Date();
        var year = date.getFullYear().toString();
        var month = (date.getMonth() + 101).toString().substring(1);
        var day = (date.getDate() + 100).toString().substring(1);
        if (format == 'dmy') {
            return day + "-"  +  month + "-" + year;
        } else {
            return year + "-" + month + "-" + day;
        }
    }
