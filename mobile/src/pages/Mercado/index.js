import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/Header';
import ItemMercado from '../../components/ItemMercado';

import mercadoImg from '../../assets/mercado.jpeg';

import { MaterialIcons as Icon } from '@expo/vector-icons';
import styles from './styles';
import api from '../../utils/api'

export default function Mercado(props) {

    const [comprar, setComprar] = useState(false);
    const [semDinheiro, setSemDinheiro] = useState(false);
    const [itens, setItens] = useState([]);
    const saldo = 93;

    useEffect(()=>{ 
        async function loadItens() {

            try {
                const response = await api.get(`/itens/mercado`); 
                setItens(response.data);

            } catch (err) {
                console.log(err);
            }
        }
        loadItens();
    },[])

    function comprarItem(preco) {
        console.log(saldo, ' ', preco);
        if (saldo >= preco) {
            setComprar(true);
        } else {
            setSemDinheiro(true)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header titulo={props.route.name} {...props} />
            <ScrollView style={{ flex: 1 }}>
                <Image source={mercadoImg} style={styles.mercadorImg} />
                <View style={styles.principal}>

                    <Text style={styles.texto}>Bem-vindo ao Mercado! Compre itens fantasticos e equipamentos poderosos. Vejas nosso estoque </Text>
                    <View style={styles.divisor} />

                    <View style={styles.itens}>
                        {
                            itens.map(item => (
                                <ItemMercado key={item.id} preco={item.preco} comprar={comprarItem} img={item.imagem} />
                            ))
                        }
                    </View>
                </View>
            </ScrollView>

            <Modal
                animationType="fade"
                transparent={true}
                visible={comprar}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <TouchableOpacity
                            style={styles.botaoFecharModal}
                            onPress={() => setComprar(!comprar)}
                        >
                            <Icon name='close' size={20} style={styles.textStyle} />
                        </TouchableOpacity>

                        <Text style={styles.subtitulo}>Comprar Item</Text>

                        <TouchableOpacity
                            style={{ ...styles.botaoModal }}
                            onPress={() => setComprar(!comprar)}
                        >
                            <Text style={styles.textStyle}>Comprar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={semDinheiro}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <TouchableOpacity
                            style={styles.botaoFecharModal}
                            onPress={() => setSemDinheiro(!semDinheiro)}
                        >
                            <Icon name='close' size={20} style={styles.textStyle} />
                        </TouchableOpacity>

                        <Text style={styles.subtitulo}>Dinheiro Insuficiente</Text>
                        <Text style={styles.texto}>
                            Faça mais atividades e missões
                            para receber mais recompensas
                        </Text>
                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    );
}