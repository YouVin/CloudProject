package com.example.backend.service;

import com.example.backend.dto.GameRecordDTO;
import com.example.backend.entity.GameRecord;
import com.example.backend.repository.GameRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class GameRecordServiceImpl implements GameRecordService{

    @Autowired
    private GameRecordRepository gameRecordRepository;

    @Override
    public GameRecordDTO createGameRecord(GameRecordDTO gameRecordDTO) {
        GameRecord gameRecord = new GameRecord();
        gameRecord.setPlayerName(gameRecordDTO.getPlayerName());
        gameRecord.setScore(gameRecordDTO.getScore());
        gameRecord.setGameDate(gameRecordDTO.getGameDate());
        gameRecord = gameRecordRepository.save(gameRecord);
        return new GameRecordDTO(gameRecord.getId(), gameRecord.getPlayerName(), gameRecord.getScore(), gameRecord.getGameDate());
    }

    @Override
    public GameRecordDTO getGameRecordById(Long id) {
        GameRecord gameRecord = gameRecordRepository.findById(id).orElseThrow(() -> new RuntimeException("GameRecord not found"));
        return new GameRecordDTO(gameRecord.getId(), gameRecord.getPlayerName(), gameRecord.getScore(), gameRecord.getGameDate());
    }

    @Override
    public List<GameRecordDTO> getAllGameRecords() {
        return gameRecordRepository.findAll().stream()
                .map(gameRecord -> new GameRecordDTO(gameRecord.getId(), gameRecord.getPlayerName(), gameRecord.getScore(), gameRecord.getGameDate()))
                .collect(Collectors.toList());
    }

    @Override
    public GameRecordDTO updateGameRecord(Long id, GameRecordDTO gameRecordDTO) {
        GameRecord gameRecord = gameRecordRepository.findById(id).orElseThrow(() -> new RuntimeException("GameRecord not found"));
        gameRecord.setPlayerName(gameRecordDTO.getPlayerName());
        gameRecord.setScore(gameRecordDTO.getScore());
        gameRecord.setGameDate(gameRecordDTO.getGameDate());
        gameRecord = gameRecordRepository.save(gameRecord);
        return new GameRecordDTO(gameRecord.getId(), gameRecord.getPlayerName(), gameRecord.getScore(), gameRecord.getGameDate());
    }

    @Override
    public void deleteGameRecord(Long id) {
        gameRecordRepository.deleteById(id);
    }
}
