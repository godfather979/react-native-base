import React from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";


function Rewards(): React.JSX.Element {
  const achievements = [
    {
      id: 1,
      title: "Carbon Footprint Reducer",
      description: "Reduce your carbon footprint through sustainable practices",
      progress: 0.75,
      achieved: true,
      impact: "Saved 250kg of CO2 emissions",
    },
    {
      id: 2,
      title: "Water Conservation Champion",
      description: "Implement water-saving techniques in daily routine",
      progress: 0.6,
      achieved: true,
      impact: "Saved 1000 liters of water",
    },
    {
      id: 3,
      title: "Renewable Energy Adopter",
      description: "Switch to renewable energy sources",
      progress: 0.4,
      achieved: false,
      impact: "On track to save 500kWh",
    },
    {
      id: 4,
      title: "Green Garden Guardian",
      description: "Maintain a sustainable garden with native plants",
      progress: 0.9,
      achieved: true,
      impact: "Created habitat for 12 local species",
    },
  ];

  const leaderboard = [
    {
      rank: 1,
      name: "Sarah Chen",
      points: "3,250",
      streak: "45 days",
      growth: "+15% this week",
    },
    {
      rank: 2,
      name: "Michael Rodriguez",
      points: "2,890",
      streak: "30 days",
      growth: "+12% this week",
    },
    {
      rank: 3,
      name: "Emma Wilson",
      points: "2,675",
      streak: "28 days",
      growth: "+10% this week",
    },
    {
      rank: 4,
      name: "James Kim",
      points: "2,450",
      streak: "21 days",
      growth: "+8% this week",
    },
    {
      rank: 5,
      name: "Lisa Patel",
      points: "2,340",
      streak: "15 days",
      growth: "+5% this week",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Dashboard Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ecolyzer Impact Dashboard</Text>
        <Text style={styles.headerSubtitle}>
          Track your environmental achievements and compete for a greener future
        </Text>
      </View>

      {/* Achievements */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Environmental Achievements</Text>
        {achievements.map((achievement) => (
          <View
            key={achievement.id}
            style={[
              styles.achievementCard,
              achievement.achieved ? styles.achieved : styles.notAchieved,
            ]}
          >
            <View style={styles.iconContainer}>
              <Text style={styles.iconText}>{achievement.achieved ? "✔" : "❌"}</Text>
            </View>
            <View style={styles.achievementDetails}>
              <Text style={styles.achievementTitle}>{achievement.title}</Text>
              <Text style={styles.achievementDescription}>
                {achievement.description}
              </Text>
              
              <Text style={styles.impact}>{achievement.impact}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Leaderboard */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Top Achievers</Text>
        {leaderboard.map((entry) => (
          <View key={entry.rank} style={styles.leaderboardCard}>
            <View style={styles.rankContainer}>
              <Text style={styles.rank}>{entry.rank}</Text>
            </View>
            <View style={styles.leaderboardDetails}>
              <Text style={styles.leaderName}>{entry.name}</Text>
              <Text style={styles.leaderStats}>
                Streak: {entry.streak} | {entry.growth}
              </Text>
            </View>
            <Text style={styles.points}>{entry.points} pts</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#20c997",
    padding: 20,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#e9ecef",
    marginTop: 5,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  achievementCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
  achieved: {
    backgroundColor: "#e6f4ea",
  },
  notAchieved: {
    backgroundColor: "#f8f9fa",
  },
  iconContainer: {
    marginRight: 15,
  },
  iconText: {
    fontSize: 24,
    color: "#28a745",
  },
  achievementDetails: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  achievementDescription: {
    fontSize: 14,
    color: "#6c757d",
    marginVertical: 5,
  },
  impact: {
    marginTop: 5,
    fontSize: 12,
    color: "#20c997",
  },
  leaderboardCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 2,
  },
  rankContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#ffc107",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  rank: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  leaderboardDetails: {
    flex: 1,
  },
  leaderName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  leaderStats: {
    fontSize: 12,
    color: "#6c757d",
  },
  points: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#20c997",
  },
});

export default Rewards;
