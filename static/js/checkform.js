function checkform() {
    if ($("#u_name").val() == "" || $("#u_name").val().length < 2) {
        layer.msg('�û�������Ϊ�ջ����ǳ�̫�����', {icon: 2});
        return false;
    }

    if ($("#txaArticle").val() == "" || $("#txaArticle").val().length < 2) {
        layer.msg('��ɶ��ûдร���������̫������', {icon: 2});
        return false;
    }

    if ($("#txaArticle").val() != "" && $("#u_name").val() != "") {
        layer.alert('��ϲ�ύ�ɹ���������Ա���ͨ������ʾ!', {icon: 1});
        return true;
    } else {
        return true;
    }
} 