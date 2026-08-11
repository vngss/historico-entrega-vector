import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';

const entregasEntregador = [
  {
    id: '1',
    data: '05/08/2026 - 14:30',
    cliente: 'Padaria ',
    origem: 'Rua das Flores, 167',
    destino: 'Av. Principal, 467',
    produtos: ['2x Pães'],
    distancia: '2.5 km',
    modal: 'Bike Elétrica',
    valor: 'R$ 12,50',
  },
  {
    id: '2',
    data: '05/08/2026 - 11:15',
    cliente: 'Mercadinho ',
    origem: 'Rua do Sol, 67',
    destino: 'Rua da Lua, 202',
    produtos: ['5x Caixas de Leite'],
    distancia: '1.2 km',
    modal: 'Patinete Cargueiro',
    valor: 'R$ 8,00',
  },
];

export default function HistoricoEntregador() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.headerCard}>
        <Text style={styles.nomeCliente}>{item.cliente}</Text>
        <Text style={styles.valor}>{item.valor}</Text>
      </View>
      
      <Text style={styles.data}>📅 {item.data}</Text>
      
      <View style={styles.secaoEndereco}>
        <Text style={styles.textoEndereco}>
          <Text style={styles.negrito}>Origem:</Text> {item.origem}
        </Text>
        <Text style={styles.textoEndereco}>
          <Text style={styles.negrito}>Destino:</Text> {item.destino}
        </Text>
      </View>

      <View style={styles.boxProdutos}>
        <Text style={styles.tituloProdutos}>Produtos:</Text>
        <Text style={styles.textoProdutos}>{item.produtos.join(', ')}</Text>
      </View>

      <View style={styles.footerCard}>
        <Text style={styles.textoFooter}>Modal: {item.modal}</Text>
        <Text style={styles.textoFooter}>Distância: {item.distancia}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas Entregas</Text>
      <FlatList
        data={entregasEntregador}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}